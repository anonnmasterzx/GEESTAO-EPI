import styles from "./styles.module.css";

function LastDeliveriesTable({ deliveries }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Últimas Entregas</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>EPI</th>
            <th>Qtd</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {deliveries.map((item) => (
            <tr key={item.id}>
              <td>{item.employee}</td>
              <td>{item.epi}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LastDeliveriesTable;