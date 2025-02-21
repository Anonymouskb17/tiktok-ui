import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classNames.bind(style);

function Button({
  small = false,
  primary,
  outline = false,
  children,
  to,
  href,
  onClick,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}

      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  small: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  large: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,

  rightIcon: PropTypes.node,
};

export default Button;
