import style from "./SuggestAcount.module.scss";
import classNames from "classnames/bind";
import Protypes from "prop-types";
import AccountItem from "~/components/SuggestAcount/AccountItem";

const cx = classNames.bind(style);

function SuggestAcount({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx("more")}>See all</p>
    </div>
  );
}

SuggestAcount.prototype = {
  label: Protypes.string.isRequired,
};

export default SuggestAcount;
