import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

export const SideNavToggle = ({ isOpen, toggle }) => {
  return (
    <div className="sidenav-toggle" onClick={toggle}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </div>
  );
};

export default SideNavToggle;
