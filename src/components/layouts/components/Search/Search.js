import { useEffect, useState, useRef } from "react";
import { useDebounce } from "~/hooks";

import * as searchService from "~/services/searchService";
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
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const fetApi = async () => {
      setLoading(true);
      const result = await searchService.searchService(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetApi();
  }, [debounce]);

  const handleChange = (e) => {
    const searcValue = e.target.value;
    if (!searcValue.startsWith(" ")) {
      setSearchValue(searcValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={
          showResult && Array.isArray(searchResult) && searchResult.length > 0
        }
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Acount</h4>
              {Array.isArray(searchResult) &&
                searchResult.map((result) => (
                  <AcountItem key={result.id} data={result} />
                ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search account..."
            spellCheck={false}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
