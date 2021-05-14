import React from "react";
import style from'../Styles/app.module.css'
import logo from '../Images/hoc.svg'

export default function Navigation() {
  return (
    <>
      <div className={style.navigationBar}>
        <div id={style.hocLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Goodies">Goodies</a>
            </li>
          </ul>
        </div>
        <div className={style.contactUs}>
          <button id={style.contactUsButton}>Contact us</button>
        </div>
      </div>
    </>
  );
}
