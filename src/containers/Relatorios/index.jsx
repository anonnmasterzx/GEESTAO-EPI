import { FiArrowDown } from "react-icons/fi";

import styles from "./styles.module.css";
import EntregasTable from "../../components/Pages/EntregasPage/EntregasTable";
import RelatorioTable from "../../components/Pages/RelatoriosPage/RelatoriosTable";
import EntregasModal from "../../components/Pages/EntregasPage/EntregasModal";
import { useState } from "react";
import { entregasMock } from "../../data/entregasMock";


export default function Relatorios() {
  const [entregas, setEntregas] = useState(entregasMock);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEntrega, setSelectedEntrega] = useState(null);
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
        <h1>Relatórios</h1>
        <button className={styles.addBtn}>
          <FiArrowDown/> Exportar...
        </button>
      </header>

      

      <RelatorioTable/>

      <br/>
      <EntregasTable
        dados={entregas}
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
