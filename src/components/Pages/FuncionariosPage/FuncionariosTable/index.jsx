import styles from "./styles.module.css";

function FuncionariosTable({
  dados,
  onEdit,
  onInativar,
}) {

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Setor</th>
            <th>EPIs Recebidos</th>
            <th>Última Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {dados.map(f => (
            <tr
              key={f.id}
              className={f.status === "inativo"? styles.inativo : ""}
            >
              <td>{f.nome}</td>
              <td>{f.cargo}</td>
              <td>{f.setor}</td>
              <td>{f.epis.join(", ")}</td>
              <td>{f.ultimaEntrega}</td>
              <td className={styles.actions}>
                <button className={styles.editBtn} onClick={() => onEdit(f)}>
                  Editar
                </button>

                <button
                  onClick={() => onInativar(f.id)}
                  className={
                    f.status === "ativo" ? styles.inactivateBtn : styles.activateBtn
                  }
                >
                  {f.status === "ativo" ? "Inativar" : "Ativar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuncionariosTable;
