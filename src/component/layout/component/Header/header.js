import styles from "./header.model.scss";
import classNames from "classnames/bind";
import image from "~/asset/image/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cl = classNames.bind(styles);
function Header() {
  return (
    <header className={cl("wrapper")}>
      <div className={cl("inner")}>
        <img src={image.logo} alt="TikTok"></img>

        <div className={cl("search")}>
          <input placeholder="Search account and video" spellCheck={false} />
          <button>
            <FontAwesomeIcon className={cl("clear")} icon={faCircleXmark} />
          </button>

          {/* <FontAwesomeIcon className={cl("loading")} icon={faSpinner} /> */}
          <button>
            <FontAwesomeIcon
              className={cl("search-btn")}
              icon={faMagnifyingGlass}
            />
          </button>
        </div>

        <div className={cl("action")}></div>
      </div>
    </header>
  );
}
export default Header;
