import styles from "./styles.module.css";

function EpiTable({dados, onEdit}) {

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Validade</th>
            <th>Estoque Atual</th>
            <th>Estoque Minimo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {dados.map(f => (
            <tr key={f.id} >
              <td>{f.nome}</td>
              <td>{f.categoria}</td>
              <td>{f.validadeCA}</td>
              <td>{f.estoqueAtual}</td>
              <td>{f.estoqueMinimo}</td>
              <td>{f.status}</td>
              <td className={styles.actions}>
                <button className={styles.editBtn} onClick={() => onEdit(f)}>
                  Editar
                </button>

                <button className={styles.deleteBtn}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EpiTable;
