import axios from "axios";

// Ajuste a URL base (porta do backend)
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// Consulta de saldos em lote
export async function buscarSaldosErp(codigos: string[]) {
  const { data } = await api.post("/api/itens/saldos-erp", { codigos });
  // data.saldos = [{ codigo, saldo }]
  return data.saldos as { codigo: string; saldo: number }[];
}
