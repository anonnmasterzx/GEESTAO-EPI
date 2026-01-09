import Styles from "./styles.module.css"
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className={Styles.header}>
            <h4>Sistema de Gestão de EPI's</h4>
            <Link to={'/perfil'} className={Styles.user}>
                <span>Diego Flausino</span>
                <FaUserCircle />
            </Link>
        </div>
    )
}

export default Header;