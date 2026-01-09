import {
  FiHome,
  FiBox,
  FiTruck,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import Styles from "./styles.module.css";

function SideBar() {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>Gestão de EPI's</div>

      <ul className={Styles.menu}>
        <NavItem to="/" icon={<FiHome />} label="Dashboard" />
        <NavItem to="/funcionarios" icon={<FiUsers />} label="Funcionários" />
        <NavItem to="/epis" icon={<FiBox />} label="EPI's" />
        <NavItem to="/entregas" icon={<FiTruck />} label="Entregas" />
        <NavItem to="/relatorios" icon={<FiBarChart2 />} label="Relatórios" />
        <NavItem to="/configuracoes" icon={<FiSettings />} label="Configurações" />

        <li className={Styles.logoutButton}>
          <FiLogOut className={Styles.logoutIcon} />
          Sair
        </li>
      </ul>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${Styles.menuItem} ${isActive ? Styles.active : ""}`
      }
    >
      <span className={Styles.icon}>{icon}</span>
      {label}
    </NavLink>
  );
}

export default SideBar;
