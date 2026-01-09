import styles from "./styles.module.css";

function StatCard({title, value, icon, status = "default"}) {
  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>

      <div className={styles.value}>{value}</div>
    </div>
  );
}


export default StatCard;