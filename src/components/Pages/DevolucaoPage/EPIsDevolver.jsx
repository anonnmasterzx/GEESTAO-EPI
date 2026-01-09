import { useState } from "react";
import styles from "./styles.module.css";
import EpiRow from "./EpiRow";

function EPIsDevolver() {
  const [epis, setEpis] = useState([
    { id: 1 },
  ]);

  function adicionarEpi() {
    setEpis((prev) => [
      ...prev,
      { id: Date.now() },
    ]);
  }

  function removerEpi(id) {
    setEpis((prev) => prev.filter((epi) => epi.id !== id));
  }

  return (
    <section className={styles.card}>
      <h2>EPIs a Devolver</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>EPI</th>
            <th>Quantidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {epis.map((epi) => (
            <EpiRow
              key={epi.id}
              onRemove={() => removerEpi(epi.id)}
            />
          ))}
        </tbody>
      </table>

      <button className={styles.add} onClick={adicionarEpi}>
        + Adicionar EPI
      </button>
    </section>
  );
}

export default EPIsDevolver;
