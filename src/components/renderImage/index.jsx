import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "../image";

const RenderImage = (props) => {
  const { image, children, ...rest } = props;
  return (
    <motion.div
      className={styles.imageContainer}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      <Image src={image} alt="patient" />
      {children}
    </motion.div>
  );
};

export default RenderImage;
