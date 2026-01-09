import styles from "./styles.module.css";
import DadosPessoais from "../../components/Pages/PerfilPage/DadosPessoais";


function Perfil() {
  return (
    <div className={styles.container}>
      <h1>Perfil</h1>

      <DadosPessoais />

    </div>
  )
}

export default Perfil;