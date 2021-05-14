import React from "react";
import style from "../Styles/MiddleSection.module.css";
import cake from "../Images/cake.png";
import contentText from "../Images/contentText.svg";
import donut from "../Images/donut.png";

export default function MiddleSection() {
  return (
    <>
      <div className={style.Container}>
        <div className={style.content}>
          <img src={contentText} alt="contentText" />
        </div>
        <div className={style.orderNowButtonPosition}>
          <button className={style.orderNowButton}>Order Now</button>
        </div>
        <div className={style.cakePosition}>
          <img src={cake} alt="cake" />
        </div>
      </div>
      <div className={style.donutContainer}>
        <img src={donut} alt="donut" />
      </div>
    </>
  );
}
