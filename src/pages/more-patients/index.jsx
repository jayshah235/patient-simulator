/* eslint-disable react/no-unescaped-entities */
import Button from "../../components/button";
import Table from "../../components/table";
import { patientsData } from "../../constants/patientData";
import { HeaderData } from "./data";
import styles from "./styles.module.scss";
import cn from "classnames";

const MorePatients = () => {
  return (
    <section className={cn("container", styles.homePageContent)}>
      <div className={styles.tableHeading}>
        <div>
          <h4 className={styles.title}>All Patients</h4>
          <p className={styles.subTitle}>
            These are the cases available on this educator's license
          </p>
        </div>
        <Button className={styles.bgColor} label="Filter" />
      </div>
      <Table headerData={HeaderData} columnData={patientsData} />
    </section>
  );
};

export default MorePatients;
