import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function EpiConsumptionChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ marginBottom: 12 }}>Consumo de EPIs por mês</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
