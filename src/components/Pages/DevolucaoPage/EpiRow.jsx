import styles from "./styles.module.css";

function EpiRow({ onRemove }) {
  return (
    <tr>
      <td>
        <select>
          <option>Selecione o EPI</option>
        </select>
      </td>

      <td>
        <input type="number" min="1" />
      </td>

      <td>
        <select>
          <option>Bom</option>
          <option>Danificado</option>
          <option>Inutilizável</option>
        </select>
      </td>

      <td>
        <button
          type="button"
          className={styles.remove}
          onClick={onRemove}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

export default EpiRow;
