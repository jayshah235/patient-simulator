import { memo } from "react";
import styles from "./styles.module.scss";

const Skeleton = ({ height = "100%", marginBlock, width = "100%" }) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        height: `${height}`,
        marginBlock: `${marginBlock}`,
        width: `${width}`,
      }}
    />
  );
};

export default memo(Skeleton);
