import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const Modal = ({ children, closeModal }) => {
  const classHelper = BEMHelper("modal");

  return (
    <div className={classHelper()}>
      <div className={classHelper("overlay")} onClick={closeModal} />
      <div className={classHelper("container")}>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={closeModal}
          className={classHelper("close-btn")}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
