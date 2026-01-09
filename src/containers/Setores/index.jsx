import { useState } from "react";
import styles from "./styles.module.css";
import { FiSearch, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const setoresMock = [
  {
    id: 1,
    nome: "Produção",
    descricao: "Linha de produção",
    responsavel: "Carlos Silva",
  },
  {
    id: 2,
    nome: "Manutenção",
    descricao: "Manutenção industrial",
    responsavel: "João Pereira",
  },
  {
    id: 3,
    nome: "Administrativo",
    descricao: "Área administrativa",
    responsavel: "Maria Souza",
  },
];

export default function Setores() {
  const [busca, setBusca] = useState("");

  const setoresFiltrados = setoresMock.filter((setor) =>
    setor.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <h1>Setores</h1>

        <button className={styles.addButton}>
          <FiPlus />
          Adicionar Setor
        </button>
      </div>

      {/* Busca */}
      <div className={styles.searchBox}>
        <FiSearch />
        <input
          type="text"
          placeholder="Buscar setor..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Tabela */}
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Nome do Setor</th>
              <th>Descrição</th>
              <th>Responsável</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {setoresFiltrados.map((setor) => (
              <tr key={setor.id}>
                <td>{setor.nome}</td>
                <td>{setor.descricao}</td>
                <td>{setor.responsavel}</td>
                <td className={styles.actions}>
                  <button className={styles.edit}>
                    <FiEdit />
                  </button>
                  <button className={styles.delete}>
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}

            {setoresFiltrados.length === 0 && (
              <tr>
                <td colSpan="4" className={styles.empty}>
                  Nenhum setor encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação (visual) */}
      <div className={styles.pagination}>
        <span>Mostrando 1 a 10 de 50</span>

        <div>
          <button>&lt;&lt; Anterior</button>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>Próximo &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}
