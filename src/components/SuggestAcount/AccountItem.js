import Protypes from "prop-types";
import classNames from "classnames/bind";
import style from "./SuggestAcount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AccountItem() {
  return (
    <div className={cx("account-Item")}>
      <img
        className={cx("avatar")}
        src="https://thuthuatnhanh.com/wp-content/uploads/2019/08/hinh-girl-deo-kinh-cute-580x580.jpg"
        alt=""
      />
      <div className={cx("item-infor")}>
        <p className={cx("nickname")}>
          <strong>Ý Nhi</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>ynhi</p>
      </div>
    </div>
  );
}

AccountItem.prototype = {};

export default AccountItem;
