import styles from "./styles.module.css";
import { FiUser, FiLock, FiShield } from "react-icons/fi";

function DadosDevolucao() {
  return (
    <div className={styles.container}>
      {/* Dados Pessoais */}
      <section className={styles.card}>
        <h2><FiUser /> Dados Pessoais</h2>

        <div className={styles.profileRow}>
          <div className={styles.avatar}>
          </div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Nome</label>
              <input type="text" value="Diego Flausino" readOnly />
            </div>

            <div className={styles.field}>
              <label>E-mail</label>
              <input type="email" value="diego@email.com" readOnly />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>

          <button className={styles.primaryButton}>
            Atualizar Dados
          </button>
        </div>

      </section>

      {/* Atualizar Senha */}
      <section className={styles.card}>
        <h2><FiLock /> Atualizar Senha</h2>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Senha Atual</label>
            <input type="password" />
          </div>

          <div className={styles.field}>
            <label>Nova Senha</label>
            <input type="password" />
          </div>

          <div className={styles.field}>
            <label>Confirmar Nova Senha</label>
            <input type="password" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Alterar Senha
          </button>
        </div>
      </section>

      {/* Autenticação */}
      <section className={styles.card}>
        <h2><FiShield /> Autenticação</h2>

        <div className={styles.containerCheckBox}>

          <div className={styles.checkbox}>
            <input type="checkbox" id="2fa" />
            <label htmlFor="2fa">
              Habilitar autenticação de duas etapas
            </label>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="mobileAuth" />
            <label htmlFor="mobileAuth">
              Permitir autenticação em aplicativos móveis
            </label>
          </div>
        </div>

      </section>
    </div>
  );
}

export default DadosDevolucao;
