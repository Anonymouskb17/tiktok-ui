import classNames from "classnames/bind";
import styles from "./Poper.module.scss";
import Proptypes from "prop-types";

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

Wrapper.prototype = {
  children: Proptypes.node.isRequired,
  className: Proptypes.string,
};

export default Wrapper;
