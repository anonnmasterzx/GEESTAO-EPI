import Modal from "../../../Modal";
import styles from "./style.module.css";
import { FiEye, FiEdit, FiPlus } from "react-icons/fi";

export default function TiposEpiModal({
  isOpen,
  onClose,
  tiposEpi = []
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Gerenciar Tipos de EPIs"
    >
      <div className={styles.headerActions}>
        <h4>Tipos de EPIs</h4>
        
        <button className={styles.primary}>
          <FiPlus />
          Novo Tipo
        </button>
      </div>

      <div className={styles.list}>
        {tiposEpi.map((epi) => (
          <div key={epi.id} className={styles.card}>
            <div className={styles.cardInfo}>
              <strong>{epi.nome}</strong>
              <span>{epi.categoria}</span>
              <small>CA: {epi.ca}</small>
              <small>Validade: {epi.validadeMeses} meses</small>
            </div>

            <div className={styles.actions}>
              <button title="Visualizar">
                <FiEye />
              </button>
              <button title="Editar">
                <FiEdit />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <button onClick={onClose} className={styles.secondary}>Fechar</button>
      </div>
    </Modal>
  );
}
