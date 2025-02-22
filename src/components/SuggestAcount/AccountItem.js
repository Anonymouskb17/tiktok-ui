import Protypes from "prop-types";
import classNames from "classnames/bind";
import style from "./SuggestAcount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Poper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(style);

function AccountItem() {
  const handlPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        offset={[-20, 12]}
        interactive
        delay={[800, 0]}
        placement="bottom"
        render={handlPreview}
      >
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
      </Tippy>
    </div>
  );
}

AccountItem.prototype = {};

export default AccountItem;
