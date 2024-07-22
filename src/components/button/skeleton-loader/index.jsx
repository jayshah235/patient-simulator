import styles from "./styles.module.scss";

const Skeleton = ({ height = "200px", marginBlock }) => {
  return (
    <div
      className={styles.skeleton}
      style={{ height: `${height}`, marginBlock: `${marginBlock}` }}
    />
  );
};

export default Skeleton;
