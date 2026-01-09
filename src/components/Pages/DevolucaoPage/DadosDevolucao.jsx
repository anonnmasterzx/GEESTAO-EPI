import styles from "./styles.module.css";

function DadosDevolucao() {
  return (
    <section className={styles.card}>
      <h2>Dados da Devolução</h2>

      <div className={styles.grid}>
        <div>
          <label>Funcionário</label>
          <select>
            <option>Selecione</option>
          </select>
        </div>

        <div>
          <label>Data da Devolução</label>
          <input type="date" />
        </div>

        <div className={styles.full}>
          <label>Motivo da Devolução</label>
          <select>
            <option>Troca</option>
            <option>Vencimento</option>
            <option>Danificado</option>
            <option>Desligamento</option>
          </select>
        </div>

        <div className={styles.full}>
          <label>Observações</label>
          <textarea rows="3" />
        </div>
      </div>
    </section>
  );
}

export default DadosDevolucao;
