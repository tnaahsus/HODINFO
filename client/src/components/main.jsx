import React, { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState();
  async function ax() {
    const res = await axios.get(`http://localhost:9000/`);
    setData(res.data);
  }
  useEffect(() => {
    ax();
  }, []);

  return (
    <div className='mainBox'>
      <div className="statsSection">
        <div className="side-boxes">
          <span>0.85 %</span>
          <br />
          <span>5 Mins</span>
        </div>
        <div className="side-boxes">
          <span>1.07 %</span>
          <br />
          <span>1 Hour</span>
        </div>
        <div className="middle-box">
          <span>Best Price to Trade</span>
          <br />
          <span>₹ 29,18,057</span>
          <br />
          <span>Average BTC/INR net price including commission</span>
        </div>
        <div className="side-boxes">
          <span>0.85 %</span>
          <br />
          <span>5 Mins</span>
        </div>
        <div className="side-boxes">
          <span>1.07 %</span>
          <br />
          <span>1 Hour</span>
        </div>
      </div>
      <a href="https://finstreet.in/">
        <div className="advertisement">
          <img
            src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
            alt="advertisement"
          />
        </div>
      </a>
      <div className="table">
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <th>
                <h4>
                  <span className="pointer">#</span>
                </h4>
              </th>
              <th>
                <h4>
                  <span className="pointer">Name</span>
                </h4>
              </th>
              <th>
                <h4>
                  <span className="pointer">Last</span>
                </h4>
              </th>
              <th>
                <h4>
                  <span className="pointer">Buy / Sell Price</span>
                </h4>
              </th>
              <th>
                <h4>
                  <span className="pointer">Volume</span>
                </h4>
              </th>
              <th>
                <h4>
                  <span className="pointer">Base Unit</span>
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((data) => {
              return (
                <tr key={data.id}>
                  <td className="align-middle">
                    <h4 className="table-text">{data.id}</h4>
                  </td>
                  <td className="align-middle">
                    <span className="exchange-name">{data.name}</span>
                  </td>
                  <td className="align-middle">
                    <h4 className="table-text">₹ {data.last}</h4>
                  </td>
                  <td className="align-middle">
                    <h4 className="table-text">
                      <span>
                        ₹ {data.buy} / ₹ {data.sell}
                      </span>
                    </h4>
                  </td>
                  <td className="align-middle">
                    <h4 className="table-text color-red">{data.volume}</h4>
                  </td>
                  <td className="align-middle">
                    <h4 className="table-text color-red">{data.baseunit}</h4>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <a href="https://www.algorand.com/futurefi/">
        <div className="advertisement">
          <img
            src="https://hodlinfo.com/static/media/banneriost.208a75ba.jpg"
            alt="advertisement"
          />
        </div>
      </a>
      <footer className='footer'>
        <div className='left-side'>
          <span>Copyright © 2019</span>
          <span>HodlInfo.com</span>
          <span>Developed By <a href="https://www.quadbtech.com/" style={{color:'#3dc6c1',textDecoration:'None'}}>QuadBTech</a></span>
        </div>
        <div className='right-side'>
          <span>Support</span>
        </div>
      </footer>
    </div>
  );
};

export default Main;
