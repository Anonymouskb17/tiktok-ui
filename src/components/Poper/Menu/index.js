import Tippy from "@tippyjs/react/headless";
import style from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Poper";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(style);
const defaultonChange = () => {};
function Menu({ children, items = [], onChange = defaultonChange }) {
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
      offset={[12, 8]}
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            {renderItem()}
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

export default Menu;
