import styles from "./styles.module.css";

function RelatorioTable() {

  return (
    <div className={styles.tableWrapper}>

      <div className={styles.header}>
        <h3>Filtros</h3>
      </div>

      <div className={styles.row}>
        <div className={`${styles.field} ${styles.periodo}`}>
          <label>Período</label>
          <div className={styles.periodoInputs}>
            <input type="date" className={styles.date} />
            <input type="date" className={styles.date} />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Funcionário</label>
          <select>
            <option value="">- Selecione -</option>
            <option>João Silva</option>
            <option>Maria Souza</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Setor</label>
          <select>
            <option value="">- Selecione -</option>
            <option>Produção</option>
            <option>Administrativo</option>
            <option>Logística</option>
          </select>
        </div>
      </div>

      <button className={styles.button}>Gerar Relatório</button>

    </div>

  );
}

export default RelatorioTable;
