import { prisma } from "../db/prisma";
import { Prisma } from "@prisma/client";

/**
 * Retorna o saldo (SUM de E01_QUANTATUAL) para um item no ERP (sinônimo dbo.erp_SaldoItens).
 * Se E01_QUANTATUAL for VARCHAR, descomente o CAST.
 */
export async function obterSaldoItem(codigoItem: string) {
  const rows = await prisma.$queryRaw<
    { E01_ITEM: string; SaldoAtual: number }[]
  >`SELECT E01_ITEM,
           SUM(/* CAST( */ E01_QUANTATUAL /* AS DECIMAL(18,4)) */) AS SaldoAtual
     FROM dbo.erp_SaldoItens
     WHERE E01_ITEM = ${codigoItem}
     GROUP BY E01_ITEM`;

  return rows?.[0]?.SaldoAtual ?? 0;
}

/**
 * (Opcional) Lista saldos por Local/Lote/Série do item (útil para auditoria e conferência física)
 */
export async function listarSaldosDetalhados(codigoItem: string) {
  const rows = await prisma.$queryRaw<
    {
      E01_ITEM: string;
      E01_LOCAL: string | null;
      E01_LOTE: string | null;
      E01_SERIE: string | null;
      Quantidade: number;
    }[]
  >`SELECT E01_ITEM, E01_LOCAL, E01_LOTE, E01_SERIE,
           SUM(/* CAST( */ E01_QUANTATUAL /* AS DECIMAL(18,4)) */) AS Quantidade
     FROM dbo.erp_SaldoItens
     WHERE E01_ITEM = ${codigoItem}
     GROUP BY E01_ITEM, E01_LOCAL, E01_LOTE, E01_SERIE
     ORDER BY E01_LOCAL, E01_LOTE, E01_SERIE`;

  return rows;
}

/**
 * Retorna saldos para uma lista de códigos.
 * - codigos: array de strings (ex.: ["EPI-001", "EPI-002"])
 * - Consulta via sinônimo dbo.erp_SaldoItens (NEXTSI_HOMOLOG.dbo.E01)
 */
export async function obterSaldosPorItens(codigos: string[]) {
  if (!Array.isArray(codigos) || codigos.length === 0) return [];

  // Constrói lista parametrizada para IN (...)
  const params = Prisma.join(codigos.map((c) => Prisma.sql`${c}`));

  // Se E01_QUANTATUAL for VARCHAR, descomente CAST p/ DECIMAL
  const query = Prisma.sql`
    SELECT E01_ITEM AS codigo,
           SUM(/* CAST( */ E01_QUANTATUAL /* AS DECIMAL(18,4)) */) AS saldo
    FROM dbo.erp_SaldoItens
    WHERE E01_ITEM IN (${params})
    GROUP BY E01_ITEM
  `;

  const rows = await prisma.$queryRaw<{ codigo: string; saldo: number }[]>(
    query
  );
  return rows;
}
