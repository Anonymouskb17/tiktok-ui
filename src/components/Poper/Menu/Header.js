import style from "./Menu.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";

const cx = classNames.bind(style);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

Header.prototype = {
  title: Proptypes.string.isRequired,
  onBack: Proptypes.func.isRequired,
};

export default Header;
