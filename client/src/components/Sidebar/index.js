import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import { ReactComponent as HistoryIcon } from "../../assets/history-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout-icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/settings.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { closeNav } from "../../actions/sidebar";
import { GiThreeLeaves } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {MdLogout} from "react-icons/md"
import {IoLogOutOutline} from "react-icons/io5"
const Sidebar = () => {
  const [showCrops, setShowCrops] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);

  const handleChangePage = (route) => {
    history.push(`${route}`);
  };

  return (
    <div id="sidebar" className="side-bar">
      <h1 className="side-bar-title">SMART FARM</h1>
      <div className="user-info">
        <div className="avatar-center">
          <Avatar />
        </div>
        <span style={{ color: "white", fontWeight: "bold" }}>Admin</span>
      </div>
      <button className="closebtn" onClick={() => dispatch(closeNav())}>
        &times;
      </button>
      <button
        className={`side-bar-btn ${
          pathname === "/" ? "side-bar-btn--active" : ""
        }`}
        onClick={() => handleChangePage("")}
      >
        <HomeIcon /> <span>Home</span>
      </button>
      <button
        className={`side-bar-btn ${
          pathname === "/history" ? "side-bar-btn--active" : ""
        }`}
        onClick={() => handleChangePage("/history")}
      >
        <HistoryIcon /> <span>History</span>
      </button>
      <button
        className={`side-bar-btn ${
          pathname === "/change-password" ? "side-bar-btn--active" : ""
        }`}
        onClick={() => handleChangePage("/change-password")}
      >
        <SettingIcon /> <span>Password</span>
      </button>
        
      <button
        onClick={() => dispatch(logout())}
        className="side-bar-btn logout-btn"
      >
        <LogoutIcon /><span>Log out</span>
      </button>
    </div>
  );
};

export default React.memo(Sidebar);