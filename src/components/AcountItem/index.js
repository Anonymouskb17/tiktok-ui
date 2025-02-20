import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import style from "./AcountItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function AcountItem() {
  return (
    <div className={cx("wrapper")}>
      <images
        className={cx("avatar")}
        src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjpkHE8IpiRbkacFfKEgXL12_aXj8DbbCCHwd5RbiqDb-vHRIeqNlIhkbttVTDyDc7d_ilwwRUVyx9FNT3V9PL-RcmdVaZXEI0hhonRhHQWICN3Or7fSL5xGENFLud5r7DfWq49HbkF5ISQOnLWQ=s412?key=rNRmiFjobxteGc5w7mKQIg"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn văn a</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Nguyenvana</span>
      </div>
    </div>
  );
}

export default AcountItem;
