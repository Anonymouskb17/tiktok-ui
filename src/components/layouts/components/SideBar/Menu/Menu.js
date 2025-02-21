import Protypes from "prop-types";
function Menu({ children }) {
  return <nav>{children}</nav>;
}

Menu.prototype = {
  children: Protypes.node.isRequired,
};

export default Menu;
