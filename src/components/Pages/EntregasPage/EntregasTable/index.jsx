import styles from "./styles.module.css";

function EntregasTable({ dados, onView }) {

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>EPI</th>
            <th>Quantidade</th>
            <th>Data</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {dados.map(f => (
            <tr key={f.id} >
              <td>{f.funcionario.nome}</td>
              <td>{f.epi.nome}</td>
              <td>{f.quantidade}</td>
              <td>{f.dataEntrega}</td>
              <td>{f.responsavel}</td>
              <td className={styles.actions}>
                <button className={styles.viewBtn} onClick={() => onView(f)}>
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntregasTable;
