import styles from "./styles.module.scss";

const Selector = ({ label, onClick, children }) => {
  return (
    <div className={styles.selectType}>
      <div role="presentation" className={styles.iconsBg} onClick={onClick}>
        {children}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Selector;
