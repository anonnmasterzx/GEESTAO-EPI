import { useState } from "react";
import styles from "./styles.module.css";
import { FiSearch, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const usuariosMock = [
  {
    id: 1,
    nome: "Diego Flausino",
    email: "diego@email.com",
    funcao: "Administrador",
    acesso: "Total"
,
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    funcao: "Técnico de Segurança",
    acesso: "Parcial",
  },
  {
    id: 3,
    nome: "João Pereira",
    email: "joao@email.com",
    funcao: "Segurança do Trabalho",
    acesso: "Total",
  },
];

export default function Usuarios() {
  const [busca, setBusca] = useState("");

  const usuariosFiltrados = usuariosMock.filter(
    (usuario) =>
      usuario.nome.toLowerCase().includes(busca.toLowerCase()) ||
      usuario.email.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Usuários</h1>

        <button className={styles.addButton}>
          <FiPlus />
          Adicionar Usuário
        </button>
      </div>

      {/* Busca */}
      <div className={styles.searchBox}>
        <FiSearch />
        <input
          type="text"
          placeholder="Buscar usuário por nome ou e-mail..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Tabela */}
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Função</th>
              <th>Acesso</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.funcao}</td>
                <td>
                  <span
                    className={`${styles.acesso} ${
                      usuario.acesso === "Ativo"
                        ? styles.ativo
                        : styles.inativo
                    }`}
                  >
                    {usuario.acesso}
                  </span>
                </td>
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

            {usuariosFiltrados.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.empty}>
                  Nenhum usuário encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
