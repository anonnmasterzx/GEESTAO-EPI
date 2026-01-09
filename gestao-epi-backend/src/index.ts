// src/index.ts
import express from "express";
import "dotenv/config";

import { listarEpis, criarEpi } from "./services/epi.service";
import {
  obterSaldoItem,
  listarSaldosDetalhados,
  obterSaldosPorItens,
} from "./services/saldo.service";

const app = express();
app.use(express.json());

// Exemplo de rotas já existentes
app.get("/api/epis", async (_req, res, next) => {
  try {
    const data = await listarEpis();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.post("/api/epis", async (req, res, next) => {
  try {
    const novo = await criarEpi(req.body);
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
});

// Saldo total de um item (GET)
app.get("/api/itens/:codigo/saldo-erp", async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    const saldo = await obterSaldoItem(codigo);
    res.json({ codigo, saldo });
  } catch (err) {
    next(err);
  }
});

// (Opcional) Detalhes por local/lote/série (GET)
app.get("/api/itens/:codigo/saldo-erp/detalhe", async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    const dados = await listarSaldosDetalhados(codigo);
    res.json({ codigo, dados });
  } catch (err) {
    next(err);
  }
});

// ✅ NOVA ROTA: saldos em lote (POST)
app.post("/api/itens/saldos-erp", async (req, res, next) => {
  try {
    const { codigos } = req.body as { codigos: string[] };
    if (!Array.isArray(codigos) || codigos.length === 0) {
      return res
        .status(400)
        .json({ message: 'Informe um array "codigos" com ao menos 1 item.' });
    }
    const saldos = await obterSaldosPorItens(codigos);
    res.json({ saldos });
  } catch (err) {
    next(err);
  }
});

// Health
app.get("/health", (_req, res) => res.json({ ok: true }));

// Error handler central
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("🔥 Unhandled Error:", err);
    res.status(err.statusCode || 500).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`API EPI rodando na porta ${PORT}`));
