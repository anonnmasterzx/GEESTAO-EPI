import styles from "./styles.module.css";

function AlertsPanel({ alerts }) {
  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Avisos e Alertas</h3>

      <ul className={styles.list}>
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={`${styles.alert} ${styles[alert.type]}`}
          >
            <strong>{alert.title}</strong>
            <span>{alert.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertsPanel