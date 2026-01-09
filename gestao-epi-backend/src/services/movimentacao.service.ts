// src/services/movimentacao.service.ts
import { prisma } from "../db/prisma";

type MovDto = {
  epiId: number;
  colaboradorId: number;
  quantidade: number;
  responsavel: string;
  observacao?: string;
  lote?: string;
};

export async function entregar(dto: MovDto) {
  return prisma.$transaction(async (tx) => {
    const mov = await tx.movimentacaoEpi.create({
      data: {
        epiId: dto.epiId,
        colaboradorId: dto.colaboradorId,
        tipo: "ENTREGA",
        quantidade: dto.quantidade,
        responsavel: dto.responsavel,
        observacao: dto.observacao,
        lote: dto.lote,
      },
    });
    return mov;
  });
}

export async function devolver(dto: MovDto) {
  return prisma.$transaction(async (tx) => {
    const mov = await tx.movimentacaoEpi.create({
      data: {
        epiId: dto.epiId,
        colaboradorId: dto.colaboradorId,
        tipo: "DEVOLUCAO",
        quantidade: dto.quantidade,
        responsavel: dto.responsavel,
        observacao: dto.observacao,
        lote: dto.lote,
      },
    });
    return mov;
  });
}
