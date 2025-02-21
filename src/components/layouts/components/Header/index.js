import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import imgaes from "~/assets/images";

import classNames from "classnames/bind";
import config from "~/config";

import Button from "~/components/Button";
import Menu from "~/components/Poper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/icons";
import Images from "~/components/Images";
import Search from "../Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng việt",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "english",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "english",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "english",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },

        {
          type: "language",
          code: "en",
          title: "english",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "english",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },

  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shortcut",
  },
];

function Header() {
  const currentUser = true;

  const handleonChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/settings",
    },
    ...MENU_ITEM,

    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home}>
          <img src={imgaes.logo} alt="Tiktok" />
        </Link>

        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>{" "}
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEM}
            onChange={handleonChange}
          >
            {currentUser ? (
              <Images
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjpkHE8IpiRbkacFfKEgXL12_aXj8DbbCCHwd5RbiqDb-vHRIeqNlIhkbttVTDyDc7d_ilwwRUVyx9FNT3V9PL-RcmdVaZXEI0hhonRhHQWICN3Or7fSL5xGENFLud5r7DfWq49HbkF5ISQOnLWQ=s412?key=rNRmiFjobxteGc5w7mKQIg"
                className={cx("user-avatar")}
                alt="Nguyen van a"
                fallback
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
