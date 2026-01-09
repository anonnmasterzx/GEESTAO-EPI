import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.css";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchWrapper}>
      <FiSearch className={styles.icon} />
      <input
      type="text"
      placeholder="Buscar EPI..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "16px"
      }}
    />
    </div>
    
  );
}

export default SearchBar;