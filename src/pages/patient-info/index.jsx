import { useNavigate, useParams } from "react-router-dom";
import { patientsData } from "../../constants/patientData";
import {
  BackArrowIcon,
  EmailIcon,
  PhoneIcon,
} from "../../components/svg-icons";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import Modal from "../../components/modal";
import { startSimulationModalKey } from "../../constants/modalKeys";
import { openModal } from "../../store/modal-store/actions";
import StartSimulationModal from "./startSimulationModal";

const PatientInfo = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const findPatient = patientsData?.find((item) => item.id?.toString() === id);
  return (
    <>
      <section className="container">
        <div className={styles.heading}>
          <BackArrowIcon onClick={() => navigate("/home")} />
          <h3>Contact Details</h3>
        </div>
        <div className={styles.patientInfo}>
          <figure className={styles.patientImage}>
            <img src={findPatient?.patientImage} alt="" />
          </figure>
          <div className={styles.basicInfo}>
            <h3>{findPatient?.name}</h3>
            <div className={styles.inlineItems}>
              <EmailIcon />
              <p>adam.berrada@gmail.com</p>
            </div>
            <div className={styles.inlineItems}>
              <PhoneIcon />
              <p>+01 0124 4568</p>
            </div>
          </div>
        </div>
        <div className={styles.patientReport}>
          <div className={styles.report}>
            <h3>Years</h3>
            <p>{findPatient?.years}</p>
          </div>
          <div className={styles.report}>
            <h3>Kg</h3>
            <p>{findPatient?.weight}</p>
          </div>
          <div className={styles.report}>
            <h3>CM</h3>
            <p>{findPatient?.height}</p>
          </div>
          <div className={styles.report}>
            <h3>BMI</h3>
            <p>{findPatient?.bmi}</p>
          </div>
          <div className={styles.report}>
            <h3>Level</h3>
            <p>{findPatient?.level}</p>
          </div>
        </div>
        <div className={styles.detailSection}>
          <p className={styles.description}>
            To direct the questioning and clinical examination in the face of
            abdominal pain with occlusive syndrome.
          </p>
          <p className={styles.description}>
            Request and interpret the biological and radiological assessment
            requested in the context of an occlusive syndrome.
          </p>
          <p className={styles.description}>
            Interpret an abdomen without preparation (ASP), An abdominal CT
            (Computed tomography) image, and a biological assessment.
          </p>
          <p className={styles.description}>
            To direct the questioning and clinical examination in the face of
            abdominal pain with occlusive syndrome.
          </p>
          <Button
            className={styles.btn}
            label="Solve Case"
            onClick={() => openModal(startSimulationModalKey)}
          />
        </div>
      </section>
      <Modal modalKey={startSimulationModalKey} width="45dvw" title="Briefing">
        <StartSimulationModal data={findPatient} />
      </Modal>
    </>
  );
};

export default PatientInfo;
