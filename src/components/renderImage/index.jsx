import { motion } from "framer-motion";
import Image from "../image";
import styles from "./styles.module.scss";

const RenderImage = (props) => {
  const { image, loadingSrc, children, ...rest } = props;
  return (
    <motion.div
      className={styles.imageContainer}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      <Image src={image} loadingSrc={loadingSrc} alt="patient" />
      {children}
    </motion.div>
  );
};

export default RenderImage;
