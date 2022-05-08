import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/App.css";
import "../styles/toggle.css";
import Toggle from "./toggle";
import { FaTelegramPlane } from "react-icons/fa";

const Nav = () => {
  const [seconds, setSeconds] = useState(60);
  const [value, setValue] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setValue(value + 1.67);
      }
      if (seconds === 0) {
        setSeconds(60);
        setValue(0);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <nav className="navBar">
      <div className="logo">
        <img
          width={270}
          height={44}
          src="https://hodlinfo.com/static/media/HODLINFO_white.8f78fc06.png"
          alt="logo"
        />
        <p className="logo-powered">
          Powered By
          <a href="https://www.finstreet.in/"> Finstreet</a>
        </p>
      </div>
      <div className="nav-Middle">
        <select name="currency" id="currency">
          <option value="INR">INR</option>
        </select>
        <select name="crypto" id="crypto">
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
          <option value="XRP">XRP</option>
          <option value="TRX">TRX</option>
          <option value="DASH">DASH</option>
          <option value="ZEC">ZEC</option>
          <option value="XEM">XEM</option>
          <option value="IOST">IOST</option>
          <option value="WIN">WIN</option>
          <option value="BTT">BTT</option>
          <option value="WRX">WRX</option>
        </select>
        <button>Buy BTC</button>
      </div>
      <div className="nav-End">
        <div className="progressBar">
          <CircularProgressbar
            value={value}
            text={`${seconds}`}
            styles={{
              text: {
                fill: "#3DC6C1",
                fontSize: "38px",
              },
              path: {
                stroke: `#3DC6C1`,
              },
            }}
          />
        </div>
        <div className="telegram">
          <a href="https://hodlinfo.com/connect/telegram" id="telegramButton">
            <FaTelegramPlane className="icon" /> Connect Telegram
          </a>
        </div>
        <div className="toggler">
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
