import classNames from "classnames/bind";
import style from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-40.jpg "
          alt=""
        />
        <div>
          <Button className={cx("followbtn")} primary small>
            Following
          </Button>
        </div>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Ý Nhi</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>ynhi</p>
      </div>
      <p className={cx("analytics")}>
        <strong className={cx("value")}>8.2M</strong>
        <span className={cx("label")}>Followers </span>
        <strong className={cx("value")}>8.2M</strong>
        <span className={cx("label")}>Likes </span>
      </p>
    </div>
  );
}

export default AccountPreview;
