import { memo } from "react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../store/modal-store/actions";
import { startSimulationModalKey } from "../../constants/modalKeys";
import styles from "./styles.module.scss";

const StartSimulationModal = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <figure className={styles.profileContainer}>
        <img src={data?.patientImage} alt="" />
        <figcaption className={styles.patientName}>{data?.name}</figcaption>
      </figure>
      <p className={styles.description}>
        Male, in his 50s. Was found collapsed in his office. He has regained
        consciousness, but he keeps complaining that he is not feeling well.
        This is the first time he has been admitted to the ER so no medical
        records can be found.
      </p>
      <Button
        label="Start"
        className={styles.btn}
        onClick={() => {
          closeModal(startSimulationModalKey);
          navigate(`/simulation/${data?.type?.toLowerCase()}`);
        }}
      />
    </>
  );
};

export default memo(StartSimulationModal);
