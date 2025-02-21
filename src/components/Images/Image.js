import PropTypes from "prop-types";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import style from "./image.module.scss";
import classNames from "classnames/bind";

const Images = forwardRef(
  (
    { fallback: customback = images.noimage, className, src, alt, ...props },
    ref
  ) => {
    const [back, setBack] = useState("");

    const handleImage = () => {
      setBack(customback);
    };
    return (
      <img
        className={classNames(style.wrapper, className)}
        ref={ref}
        src={back || src}
        {...props}
        alt={alt}
        onError={handleImage}
      />
    );
  }
);

Images.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Images;
