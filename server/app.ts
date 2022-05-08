import * as express from "express";
import { Routes } from "./routes/Routes";
import Coins from "./entity/Coins";
import { connection } from "./connection/connection";
import axios from "axios";
import bodyParser = require("body-parser");
import cors = require("cors");
class App {
  public app: express.Application;
  public routePrv: Routes;
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.routePrv = new Routes();
    let res;
    async function ax() {
      res = await axios.get(`https://api.wazirx.com/api/v2/tickers`);
      let mainArray = await Object.getOwnPropertyNames(res["data"]).sort();
      mainArray = mainArray.slice(0, 10);
      connection
        .then(async (connection) => {
          let database = await connection.manager.find(Coins);
          console.log(database.length);
          if (database.length < 1) {
            for (let i = 0; i < mainArray.length; i++) {
              const coin = new Coins();
              coin.name = res["data"][mainArray[i]].name;
              coin.last = res["data"][mainArray[i]].last;
              coin.buy = res["data"][mainArray[i]].buy;
              coin.sell = res["data"][mainArray[i]].sell;
              coin.volume = res["data"][mainArray[i]].volume;
              coin.baseunit = res["data"][mainArray[i]].base_unit;
              await connection.manager.save(coin);
            }
          }
        })
        .catch((error) => {
          console.error("Error ", error);
        });
    }
    ax();
    this.routePrv.routes(this.app);
  }
}
export default new App().app;
