// src/services/epi.service.ts
import { prisma } from "../db/prisma";

export async function listarEpis() {
  return prisma.epi.findMany();
}

export async function criarEpi(data: {
  codigo: string;
  tipo: string;
  descricao: string;
  CA?: string;
  validadeCA?: Date;
  vidaUtilMeses?: number;
  fabricante?: string;
  estoqueMinimo?: number;
}) {
  return prisma.epi.create({ data });
}
