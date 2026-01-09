import styles from "./styles.module.css";
import { useState } from "react";

import SearchBar from "../../components/Pages/EpiPage/SearchBar";
import EpiTable from "../../components/Pages/EpiPage/EpiTable";
import EpiModal from "../../components/Pages/EpiPage/EpiModal";
import { epiMock } from "../../data/epiMock";

export default function EPIs() {
  const [search, setSearch] = useState("");

  const [epi, setEpi] = useState(epiMock);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEpi, setSelectedEpi] = useState(null);

  const epiFiltrados = epiMock.filter(
    (e) =>
      e.nome.toLowerCase().includes(search.toLowerCase()) ||
      e.categoria.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd() {
    setSelectedEpi(null);
    setOpenModal(true);
  }

  function handleEdit(epi) {
    setSelectedEpi(epi);
    setOpenModal(true);
  }

  function handleSave(data) {
    if (selectedEpi) {
      // editar
      setEpi((prev) =>
        prev.map((f) => (f.id === selectedEpi.id ? { ...data, id: f.id } : f))
      );
    } else {
      // adicionar
      setEpi((prev) => [...prev, { ...data, id: Date.now(), status: "OK" }]);
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>EPIs</h1>
        <button className={styles.addBtn} onClick={handleAdd}>
          + Adicionar EPI
        </button>
      </header>

      <SearchBar value={search} onChange={setSearch} />

      <EpiTable dados={epiFiltrados} onEdit={handleEdit} />

      <EpiModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        epi={selectedEpi}
      />
    </div>
  );
}
