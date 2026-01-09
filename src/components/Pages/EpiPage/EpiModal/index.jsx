import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import styles from "./style.module.css";

const initialState = {
  nome: "",
  categoria: "",
  ca: "",
  validadeCA: "",
  estoqueAtual: 0,
  estoqueMinimo: 0,
  status: "OK"
};

export default function EpiModal({
  isOpen,
  onClose,
  onSave,
  epi
}) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (epi) {
      setForm(epi);
    } else {
      setForm(initialState);
    }
  }, [epi]);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={epi ? "Editar EPI" : "Novo EPI"}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label>Nome</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>Tipo</label>
          <input
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>Validade</label>
          <input
            name="validadeCA"
            value={form.validadeCA}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Estoque Atual</label>
          <input
            name="estoqueAtual"
            value={form.estoqueAtual}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Estoque Minímo</label>
          <input
            name="estoqueMinimo"
            value={form.estoqueMinimo}
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className={styles.primary}>
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
}
