import { useMemo, useState } from "react";
import * as icons from "../../components/svg-icons";
import RenderImage from "../../components/renderImage";
import cn from "classnames";
import Modal from "../../components/modal";
import { closeModal, openModal } from "../../store/modal-store/actions";
import Selector from "../../components/roundSelectors";
import { SimulationImage } from "../../constants/images";
import {
  FemalePatientImageRenderer,
  KidPatientImageRenderer,
  MalePatientImageRenderer,
  PatientPose,
  PatientViews,
} from "./data";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

const PatientSimulator = () => {
  const [image, setImage] = useState("half");
  const { gender } = useParams();
  /*
  Memoised the function to prevent unnecessary rerendering so
 it only executes when gender routes params is changes
  */
  const filteredImageData = useMemo(() => {
    let data = [];
    if (gender === "male") {
      data = MalePatientImageRenderer;
    } else if (gender === "female") {
      data = FemalePatientImageRenderer;
    } else if (gender === "kid") {
      data = KidPatientImageRenderer;
    }
    return data;
  }, [gender]);
  return (
    <>
      <div className={styles.patientImage}>
        {filteredImageData?.map(
          (s, idx) =>
            image === s?.type && (
              <RenderImage
                key={idx}
                image={s?.image}
                initial={s?.initial}
                animate={s?.animate}
              >
                {s?.dots?.length &&
                  s?.dots?.map((x, index) => (
                    <div
                      key={index}
                      role="presentation"
                      className={styles.dots}
                      style={x.style}
                      onClick={() => openModal(x?.modalKey)}
                    />
                  ))}
              </RenderImage>
            )
        )}
        <icons.ThreeDotsIcon className={styles.threeDotsIcon} />
        <icons.TimeIcon className={styles.timeIcon} />
        <icons.DeleteIcon className={styles.deleteIcon} />
        <div className={styles.assessmentIcon}>
          <div className={styles.checkAnalysis}>
            <div className={cn(styles.iconContainer, styles.glowingAnimation)}>
              <icons.AssesmentIcon />
            </div>
          </div>
        </div>
        <div className={styles.analysisWrapper}>
          <div className={styles.patientAnalysis}>
            <div className={cn(styles.analysisDetails, styles.hg_180)}>
              <div className={styles.simulationDetails}>
                <p>Blood Pressure</p>
                <p>mmHg</p>
              </div>
              <div className={styles.simulationDetails}>
                <p>Pulse</p>
                <p>/min</p>
              </div>
              <div className={styles.simulationDetails}>
                <p>Breath Rtae</p>
                <p>/min</p>
              </div>
              <div className={styles.simulationDetails}>
                <p>O2 Sat</p>
                <p>% ET cO2</p>
                <p>mmHg</p>
              </div>
              <div className={styles.simulationDetails}>
                <p>Victor Jensen (83.00 Kg)</p>
              </div>
            </div>
          </div>
          <div className={cn(styles.patientAnalysis)}>
            <div className={cn(styles.analysisDetails, styles.hg_80)}>
              <div className={styles.simulationDetails}>
                <p>Ecg</p>
              </div>
              <div className={styles.heartRate}>
                <icons.HeartRateIcon />
              </div>
              <div className={styles.simulationDetails}>
                <p>Victor Jensen (83.00 Kg)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.viewSections}>
          <div className={styles.changeType}>
            <div
              role="presentation"
              className={styles.iconContainer}
              onClick={() => openModal("posesModal")}
            >
              <icons.GroupIcon />
            </div>
            <div
              role="presentation"
              className={styles.iconContainer}
              onClick={() => openModal("viewsModal")}
            >
              <icons.ViewIcon />
            </div>
          </div>
          <div className={styles.checkAnalysis}>
            <div className={styles.iconContainer}>
              <icons.MessagingIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.StetescopeIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.MonitoringIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.TestaIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.HandIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.CallIcon />
            </div>
            <div className={styles.iconContainer}>
              <icons.MedicationIcon />
            </div>
          </div>
          <div className={styles.checkRecords}>
            <div className={styles.iconContainer}>
              <icons.MedicalRecordIcon />
            </div>
          </div>
        </div>
      </div>
      <Modal modalKey="heartModal">
        <div className={styles.heartImage}>
          <img src={SimulationImage.heart} alt="" />
        </div>
      </Modal>
      <Modal modalKey="lungsModal">
        <div className={styles.image}>
          <img src={SimulationImage.lungs} alt="" />
        </div>
      </Modal>
      <Modal modalKey="liverModal">
        <div className={styles.image}>
          <img src={SimulationImage.liver} alt="" />
        </div>
      </Modal>
      <Modal modalKey="stomachModal">
        <div className={styles.image}>
          <img src={SimulationImage.stomach} alt="" />
        </div>
      </Modal>
      <Modal modalKey="posesModal" width="40%" title="Poses">
        <div className={styles.iconsContainer}>
          {PatientPose?.map((s, idx) => (
            <Selector
              key={idx}
              label={s?.label}
              onClick={() => {
                setImage(s?.imageType);
                closeModal("posesModal");
              }}
            >
              {s?.icon}
            </Selector>
          ))}
        </div>
      </Modal>
      <Modal modalKey="viewsModal" width="30%" title="Views">
        <div className={styles.iconsContainer}>
          {PatientViews?.map((s, idx) => (
            <Selector
              key={idx}
              label={s?.label}
              onClick={() => {
                setImage(s?.imageType);
                closeModal("viewsModal");
              }}
            >
              {s?.icon}
            </Selector>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default PatientSimulator;
