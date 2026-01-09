import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import styles from "./style.module.css";

const initialState = {
  nome: "",
  razaoSocial: "",
  cnpj: "",
  email: "",
  telefone: "",
  endereco: "",
  cidade: "",
  estado: "",
  responsavel: ""
};

export default function EmpresaConfigModal({
  isOpen,
  onClose,
  onSave,
  empresa
}) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (empresa) {
      setForm(empresa);
    } else {
      setForm(initialState);
    }
  }, [empresa]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
      title="Configurações da Empresa"
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.group}>
          <label>Nome da Empresa</label>
          <input
            name="nome"
            value={form.nome}
            readOnly 
            required
          />
        </div>

        <div className={styles.group}>
          <label>Razão Social</label>
          <input
            name="razaoSocial"
            value={form.razaoSocial}
            readOnly 
          />
        </div>

        <div className={styles.group}>
          <label>CNPJ</label>
          <input
            name="cnpj"
            value={form.cnpj}
            readOnly 
            placeholder="00.000.000/0000-00"
            required
          />
        </div>

        <div className={styles.group}>
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            value={form.email}
            readOnly 
          />
        </div>

        <div className={styles.group}>
          <label>Telefone</label>
          <input
            name="telefone"
            value={form.telefone}
            readOnly 
          />
        </div>

        <div className={styles.group}>
          <label>Endereço</label>
          <input
            name="endereco"
            value={form.endereco}
            readOnly 
          />
        </div>

        <div className={styles.inline}>
          <div className={styles.group}>
            <label>Cidade</label>
            <input
              name="cidade"
              value={form.cidade}
              readOnly 
            />
          </div>

          <div className={styles.group}>
            <label>Estado</label>
            <input
              name="estado"
              value={form.estado}
              readOnly 
            />
          </div>
        </div>

        <div className={styles.group}>
          <label>Responsável</label>
          <input
            name="responsavel"
            value={form.responsavel}
            readOnly 
          />
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
}
