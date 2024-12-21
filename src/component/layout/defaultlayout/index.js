import Header from "~/component/layout/component/Header/header.js";
import Sidebar from "~/component/layout/defaultlayout/Sidebar/sidebar.js";
import styles from "~/component/layout/defaultlayout/layout.scss";
import classNames from "classnames/bind";

const c1 = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={c1("wrapper")}>
      <div className={c1("container")}>
        <Sidebar />
        <div className={c1("content")}>{children} home page</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
