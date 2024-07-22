import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../components/svg-icons";
import styles from "./styles.module.scss";

export const HeaderData = [
  {
    Header: "PATIENTS",
    Cell: (props) => {
      const rowData = props.row.original;
      return (
        <div className={styles.inlineItems}>
          <figure className={styles.patientImage}>
            <img src={rowData.patientImage} alt="" />
          </figure>
          <div className={styles.patientName}>
            <p>{rowData.name}</p>
            <p>{rowData.roleId}</p>
          </div>
        </div>
      );
    },
  },
  {
    Header: "GENDER",
    accessor: "gender",
  },
  {
    Header: "YEARS",
    accessor: "years",
  },
  {
    Header: "KG",
    accessor: "weight",
  },
  {
    Header: "CM",
    accessor: "height",
  },
  {
    Header: "BMI",
    accessor: "bmi",
  },
  {
    Header: "LEVEL",
    accessor: "level",
  },
  {
    Header: "VIEW",
    Cell: (props) => {
      const navigate = useNavigate();
      return (
        <EyeIcon
          onClick={() => navigate(`/patient/${props.row.original.id}`)}
        />
      );
    },
  },
];
