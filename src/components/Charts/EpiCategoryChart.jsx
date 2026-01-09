import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EpiCategoryChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ marginBottom: 12 }}>EPIs por categoria</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            label
            outerRadius={100}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
