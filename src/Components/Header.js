import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBookOpen,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../Redux/slice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const items = [
    {
      key: "1",
      label: (
        <Link to="http://localhost:3000/truyen/theo-doi">
          Theo dõi{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#c20000" }} />
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="http://localhost:3000/user/dang-nhap">
          Đăng nhập{" "}
          <FontAwesomeIcon icon={faUser} style={{ color: "#787878" }} />
        </Link>
      ),
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faBookOpen} style={{ color: "#ffffff" }} />
        <Link to="/" className="link">
          {" "}
          Light Novel Web
        </Link>
      </div>
      <div className="header-side">
        <button
          className={`toggle-button ${darkMode ? "dark" : "light"}`}
          onClick={handleToggleDarkMode}
        >
          <span className="toggle-button__text">
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
            ) : (
              <FontAwesomeIcon icon={faMoon} style={{ color: "#080808" }} />
            )}
          </span>
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Nhập tên truyện ..."
          autoComplete="off"
        />
        <div className="dropdown">
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <button className="dropdown-button">
              <div className="hamburger-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
