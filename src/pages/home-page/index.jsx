import cn from "classnames";
import image from "../../assests/images/sideBarImage.png";
import Button from "../../components/button";
import Table from "../../components/table";
import { HeaderData } from "./data";
import { Link } from "react-router-dom";
import { patientsData } from "../../constants/patientData";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <article className={styles.homePageContainer}>
      <aside className={cn("container", styles.sideBarSection)}>
        <h2 className={styles.sideBarHeading}>
          Your <strong> Patient Simulator </strong> has a fresh look!
        </h2>
        <figure className={styles.sideBarImage}>
          <img src={image} alt="" />
        </figure>
        <Button label="See what's new" />
      </aside>
      <section className={cn("container", styles.homePageContent)}>
        <div className={styles.tableHeading}>
          <div>
            <h4 className={styles.title}>Your Patients</h4>
            <p className={styles.subTitle}>These are the cases available...</p>
          </div>
          <Link to="/more-patients">
            <Button className={styles.bgColor} label="More Patients" />
          </Link>
        </div>
        <Table headerData={HeaderData} columnData={patientsData} />
      </section>
    </article>
  );
};

export default HomePage;
