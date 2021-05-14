import React from "react";
import style from "../Styles/HeroSection.module.css";
import heroslogan from "../Images/hero.svg";
import balloons from "../Images/balloon.png";
import macroons from "../Images/macroons.png";

export default function HeroSection() {
  return (
    <>
      <div className={style.heroSection}>
        <div className={style.heroSlogan}>
          <img src={heroslogan} alt="heroslogan" />
        </div>
        <div className={style.checkOurMenuPos}>
          <button className={style.checkOurMenu}>Check Our Menu</button>
        </div>
        <div className={style.balloons}>
          <img src={balloons} alt="ballons" />
        </div>
      </div>
      <div className={style.macroons}>
        <img src={macroons} alt="macroons" />
      </div>
    </>
  );
}
