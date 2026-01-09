import styles from "./styles.module.css";
import { useState } from "react";

import SearchBar from "../../components/Pages/EntregasPage/SearchBar";
import EntregasTable from "../../components/Pages/EntregasPage/EntregasTable";
import EntregasModal from "../../components/Pages/EntregasPage/EntregasModal";

import { entregasMock } from "../../data/entregasMock";


export default function Entregas() {
  const [entregas, setEntregas] = useState(entregasMock);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEntrega, setSelectedEntrega] = useState(null);
  const [search, setSearch] = useState("");
  const entregasFiltradas = entregas.filter(e =>
    e.funcionario.nome.toLowerCase().includes(search.toLowerCase()) ||
    e.epi.nome.toLowerCase().includes(search.toLowerCase()) ||
    e.responsavel.toLowerCase().includes(search.toLowerCase())
  );



    function handleAdd() {
    setSelectedEntrega(null);
    setOpenModal(true);
  }

  function handleEdit(entregas) {
    setSelectedEntrega(entregas);
    setOpenModal(true);
  }

  function handleSave(data) {
    if (selectedEntrega) {
      // editar
      setEntregas(prev =>
        prev.map(f =>
          f.id === selectedEntrega.id
            ? { ...data, id: f.id }
            : f
        )
      );
    } else {
      // adicionar
      setEntregas(prev => [
        ...prev,
        { ...data, id: Date.now(), status: "ativo" }
      ]);
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Entregas</h1>
        <button className={styles.addBtn} onClick={handleAdd}>
          + Nova Entrega
        </button>
      </header>

      <SearchBar value={search} onChange={setSearch} />

      <EntregasTable
        dados={entregasFiltradas}
        onView={handleEdit}
      />

      <EntregasModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        entrega={selectedEntrega}
      />
    </div>
  );
}
