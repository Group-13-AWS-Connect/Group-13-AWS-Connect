// import React from "react";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import photo from "../assets/example_user2.jpg";
import logo from "../assets/bw_logo_dark.svg";
// import { HouseSimple } from '@phosphor/react';
import {HouseIcon} from "../assets/HouseIcon";
import { HouseSimple, CaretDown, CaretLeft, User, Users, FileText, CalendarBlank, ChartBar, Gear, Info, SignOut, PlayCircle, Play, Headset, ClipboardText } from "@phosphor-icons/react";
import './Sidebar.css';


const Sidebar = () => {
   
    const { logout } = useAuth0();

    const handleLogout = () => {
      logout({
        logoutParams: {
          returnTo: "/logout",
        },
      });
    };

    return (

        <div className="container">
        <div className="sidebar">
          {/* <div className="menu-btn">
          <CaretLeft weight="bold" />
            <i class="ph-bold ph-caret-left"></i>
          </div> */}
          <div className="head">
            <img src ={logo}/>
            {/* <div className="user-img">
              <img src={photo} alt="" />
            </div>
            <div className="user-details">
              <p className="title">web developer</p>
              <p className="name">John Doe</p>
            </div> */}
          </div>
          <div className="nav">
            <div className="menu">
              <p className="title">Main</p>
              <ul>
                <li>
                  <a href="/dashboard">
                    {/* <i class="icon ph-bold ph-house-simple"></i> */}
                    <HouseSimple weight="bold" className="icon" />
    
                    <span className="text">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/queue">
                    {/* <i class="icon ph-bold ph-house-simple"></i> */}
                    <Headset weight="bold" className="icon" />
    
                    <span className="text">Queue</span>
                  </a>
                </li>
                <li>
                  <a href="/recordings">
                    {/* <i class="icon ph-bold ph-house-simple"></i> */}
                    <PlayCircle weight="bold" className="icon" />
    
                    <span className="text">Recordings</span>
                  </a>
                </li>
                <li>
                  <a href="/team">
                    {/* <i class="icon ph-bold ph-house-simple"></i> */}
                    <Users weight="bold" className="icon" />
    
                    <span className="text">Team Members</span>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    {/* <i class="icon ph-bold ph-calendar-blank"></i> */}
                    <ClipboardText weight="bold" className="icon" />
                    <span className="text">Feedback</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu">
              <p className="title">Profile</p>
              <ul>
                <li>
                  <a href="/profile">
                    {/* <i class="icon ph-bold ph-gear"></i> */}
                    <User weight="bold" className="icon" />
                    <span className="text">Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu">
            <p className="title">Account</p>
            <ul>
              <li>
                <a href="#">
                  {/* <i class="icon ph-bold ph-info"></i> */}
                  <Info weight="bold" className="icon" />
                  <span className="text">Help</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <i class="icon ph-bold ph-sign-out"></i> */}
                  <SignOut weight="bold" className="icon" />
                  <span className="button__logout text" onClick={handleLogout}>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



    );
  };
  
  export default Sidebar;

