import "../GlobalStyles/GlobalStyles.scss";
import Proptypes from "prop-types";
function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.prototype = {
  children: Proptypes.node.isRequired,
};
export default GlobalStyles;
