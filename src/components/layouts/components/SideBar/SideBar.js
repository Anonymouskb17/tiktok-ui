import config from "~/config";
import style from "./SideBar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from "~/components/icons";
import SuggestAcount from "~/components/SuggestAcount";

const cx = classNames.bind(style);

function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Live"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestAcount label="Suggested account" />
      <SuggestAcount label="Following account" />
    </aside>
  );
}

export default SideBar;
