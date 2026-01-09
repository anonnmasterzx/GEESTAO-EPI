// src/db/prisma.ts
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const config = {
  server: process.env.SQL_HOST ?? "APLIC-SERVER",
  port: Number(process.env.SQL_PORT ?? 1433),
  database: process.env.SQL_DB ?? "GESTAOEPI2",
  user: process.env.SQL_USER ?? "api_epi_rw",
  password: process.env.SQL_PASSWORD ?? "Enmaster@484539",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Adapter para usar o driver mssql com Prisma
const adapter = new PrismaMssql(config);

// Prisma Client tipado
export const prisma = new PrismaClient({ adapter });
