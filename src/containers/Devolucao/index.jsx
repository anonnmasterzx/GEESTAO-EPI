import styles from "./styles.module.css";
import DadosDevolucao from "../../components/Pages/DevolucaoPage/DadosDevolucao";
import EPIsDevolver from "../../components/Pages/DevolucaoPage/EPIsDevolver";
import { Link } from "react-router-dom";

function Devolucao() {
  return (
    <div className={styles.container}>
      <h1>Devolução de EPIs</h1>

      <DadosDevolucao />
      <EPIsDevolver />

      <div className={styles.actions}>
        <Link to={'/configuracoes'} className={`${styles.cancel} ${styles.button}`}>Cancelar</Link>
        <Link to={'/configuracoes'} className={`${styles.confirm} ${styles.button}`}>Confirmar Devolução</Link>
      </div>
    </div>
  );
}

export default Devolucao;
