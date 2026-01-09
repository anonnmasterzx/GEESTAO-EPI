import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import styles from "./style.module.css";

const initialState = {
  nome: "",
  cpf: "",
  cargo: "",
  setor: "",
  status: "Ativo"
};

export default function FuncionarioModal({
  isOpen,
  onClose,
  onSave,
  employee
}) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (employee) {
      setForm(employee);
    } else {
      setForm(initialState);
    }
  }, [employee]);

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
      title={employee ? "Editar Funcionário" : "Novo Funcionário"}
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
          <label>CPF</label>
          <input
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>Cargo</label>
          <input
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Setor</label>
          <input
            name="setor"
            value={form.setor}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
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
