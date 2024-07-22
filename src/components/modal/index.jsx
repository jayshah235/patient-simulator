import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useModalStore } from "../../store/modal-store";
import { closeModal } from "../../store/modal-store/actions";
import cn from "classnames";
import { CloseIcon } from "../svg-icons";
import styles from "./styles.module.scss";

const Modal = ({
  modalKey,
  title,
  width = "90vw",
  maxHeight = "90dvh",
  children,
}) => {
  const { storeModalKey } = useModalStore();

  useEffect(() => {
    if (storeModalKey?.length) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [storeModalKey]);

  return ReactDOM.createPortal(
    <>
      {storeModalKey?.some((s) => s === modalKey) && (
        <>
          <section
            role="presentation"
            className={styles.modalContainer}
            onClick={() => closeModal(modalKey)}
          />
          <section
            className={cn(styles.modalWrapper, title?.length && styles.bgWhite)}
            style={{ width: `${width}`, maxHeight: `${maxHeight}` }}
          >
            <div
              className={cn(
                styles.modalHeading,
                title?.length && styles.borderBottom
              )}
            >
              {title?.length && <h3 className={styles.title}>{title}</h3>}
              <CloseIcon
                className={cn(
                  styles.closeIcon,
                  !title?.length && styles.closeIcon2
                )}
                onClick={() => closeModal(modalKey)}
              />
            </div>
            <div className={styles.content}>{children}</div>
          </section>
        </>
      )}
    </>,
    document.querySelector("#modal")
  );
};

export default Modal;
