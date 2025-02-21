import Header from "../components/Header/index";
import SideBar from "../components/SideBar/SideBar";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Proptypes from "prop-types";
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: Proptypes.node.isRequired,
};

export default DefaultLayout;
