import Style from "../Sidebar/sidebar.modeul.scss";
import classNames from "classnames/bind";

const cs = classNames.bind(Style);
function Sidebar() {
  return <div className={cs("wraper")}>Side bar</div>;
}
export default Sidebar;
