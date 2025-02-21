import Button from "~/components/Button/Button";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import Proptypes from "prop-types";

const cx = classNames.bind(style);
function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx("menu-item", { separate: data.separate })}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.prototype = {
  data: Proptypes.object.isRequired,
  onClick: Proptypes.func,
};
export default MenuItem;
