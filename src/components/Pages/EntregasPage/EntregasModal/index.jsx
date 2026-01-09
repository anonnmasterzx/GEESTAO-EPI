import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import styles from "./style.module.css";

const initialState = {
  funcionario: {
    nome: ""
  },
  epi: {
    nome: ""
  },
  quantidade: 0,
  dataEntrega: "xx/xx/xxxx",
  responsavel: ""
};

export default function EntregasModal({
  isOpen,
  onClose,
  onSave,
  entrega
}) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (entrega) {
      setForm(entrega);
    } else {
      setForm(initialState);
    }
  }, [entrega]);

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
      title={entrega ? "Visualizar Entrega" : "Nova Entrega"}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label>Funcionário</label>
          <input
            name="nome"
            value={form.funcionario.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>EPI</label>
          <input
            name="epi.nome"
            value={form.epi.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>Quantidade</label>
          <input
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Data</label>
          <input
            name="dataEntrega"
            value={form.dataEntrega}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Responsável</label>
          <input
            name="responsavel"
            value={form.responsavel}
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
