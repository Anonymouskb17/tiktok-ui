import Header from "../components/Header/index";
import SideBar from "./SideBar/index";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
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

export default DefaultLayout;
