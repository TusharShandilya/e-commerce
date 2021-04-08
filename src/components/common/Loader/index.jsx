import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loader = ({ className, ...rest }) => (
  <FontAwesomeIcon className={className} {...rest} icon={faSpinner} spin />
);

export default Loader;
