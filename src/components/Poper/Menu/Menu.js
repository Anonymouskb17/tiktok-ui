import Tippy from "@tippyjs/react/headless";
import style from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Poper";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import Proptypes from "prop-types";

const cx = classNames.bind(style);
const defaultonChange = () => {};
function Menu({
  children,
  items = [],
  hideonClick = false,
  onChange = defaultonChange,
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      hideOnClick={hideonClick}
      offset={[12, 8]}
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
      onHidden={() => {
        setHistory((pre) => pre.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.prototype = {
  children: Proptypes.node.isRequired,
  items: Proptypes.array,
  onChange: Proptypes.func,
  hideOnClick: Proptypes.bool,
};

export default Menu;
