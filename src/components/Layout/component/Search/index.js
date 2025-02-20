import { useEffect, useState } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Poper";
import HeadlessTippy from "@tippyjs/react/headless";
import AcountItem from "~/components/AcountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 1, 1, 1, 1]);
    }, 0);
  }, []);
  return (
    <HeadlessTippy
      interactive
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Acount</h4>
            <AcountItem />
            <AcountItem />
            <AcountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search account..."
          spellCheck={false}
        />
        {!!searchValue && (
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
