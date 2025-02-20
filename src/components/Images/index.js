import { useState, forwardRef } from "react";
import images from "~/assets/images";
import style from "./image.module.scss";
import classNames from "classnames/bind";

const Images = forwardRef(
  ({ fallback = images.noimage, className, src, alt, ...props }, ref) => {
    const [back, setBack] = useState("");

    const handleImage = () => {
      setBack(fallback);
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

export default Images;
