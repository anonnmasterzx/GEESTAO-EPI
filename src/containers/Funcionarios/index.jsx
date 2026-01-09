import { useState } from "react";
import styles from "./styles.module.css";

import SearchBar from "../../components/Pages/FuncionariosPage/SearchBar";
import FuncionariosTable from "../../components/Pages/FuncionariosPage/FuncionariosTable";
import Pagination from "../../components/Pages/FuncionariosPage/Pagination";
import FuncionarioModal from "../../components/Pages/FuncionariosPage/FuncionarioModal";

import { funcionariosMock } from "../../data/funcionarioMock";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState(funcionariosMock);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFuncionario, setSelectedFuncionario] = useState(null);
  const [search, setSearch] = useState("");
  const funcionariosFiltrados = funcionarios.filter(f =>
  f.nome.toLowerCase().includes(search.toLowerCase()) ||
  f.cargo.toLowerCase().includes(search.toLowerCase()) ||
  f.setor.toLowerCase().includes(search.toLowerCase())
);



  function inativarFuncionario(id) {
    setFuncionarios(prev =>
      prev.map(f =>
        f.id === id ? { ...f, status: f.status === "ativo" ? "inativo" : "ativo" } : f
      )
    );
  }

  function handleAdd() {
    setSelectedFuncionario(null);
    setOpenModal(true);
  }

  function handleEdit(funcionario) {
    setSelectedFuncionario(funcionario);
    setOpenModal(true);
  }

  function handleSave(data) {
    if (selectedFuncionario) {
      // editar
      setFuncionarios(prev =>
        prev.map(f =>
          f.id === selectedFuncionario.id
            ? { ...data, id: f.id }
            : f
        )
      );
    } else {
      // adicionar
      setFuncionarios(prev => [
        ...prev,
        { ...data, id: Date.now(), status: "ativo" }
      ]);
    }
  }


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Funcionários</h1>
        <button className={styles.addBtn} onClick={handleAdd}>
          + Adicionar Funcionário
        </button>
      </header>

      <SearchBar 
      value={search}
      onChange={setSearch}/>



      <FuncionariosTable
        dados={funcionariosFiltrados}
        onInativar={inativarFuncionario}
        onEdit={handleEdit}

      />

      <Pagination />

      <FuncionarioModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        employee={selectedFuncionario}
      />
    </div>
  );
}
