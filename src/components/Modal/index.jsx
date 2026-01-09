import styles from "./style.module.css";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.close} onClick={onClose}>
            ✕
          </button>
        </header>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
