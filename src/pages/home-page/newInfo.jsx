import cn from "classnames";
import image from "../../assests/images/sideBarImage.png";
import Button from "../../components/button";
import Image from "../../components/image";
import blurImage from "../../assests/placeholder-images/sidebarPlaceholderImage.jpeg";
import styles from "./styles.module.scss";

const NewInfo = () => {
  return (
    <aside className={cn("container", styles.sideBarSection)}>
      <h2 className={styles.sideBarHeading}>
        Your <strong> Patient Simulator </strong> has a fresh look!
      </h2>
      <figure className={styles.sideBarImage}>
        <Image loadingSrc={blurImage} src={image} alt="" />
      </figure>
      <Button label="See what's new" />
    </aside>
  );
};

export default NewInfo;
