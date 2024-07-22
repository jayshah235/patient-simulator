import styles from "./styles.module.scss";
import cn from "classnames";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import Table from "../../components/table";
import { HeaderData } from "./data";
import { patientsData } from "../../constants/patientData";

const PatientsInfo = () => {
  return (
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
  );
};

export default PatientsInfo;
