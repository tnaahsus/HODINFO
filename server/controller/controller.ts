import {Request, Response} from 'express';
import {connection} from "../connection/connection";
import Coins from "../entity/Coins";
class Controller {
    constructor() {}
    public getAllCoins(req: Request, res: Response) {
        connection
            .then(async connection => {
                const Coinses: Coins[] = await connection.manager.find(Coins);
                res.json(Coinses);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
}
export {Controller}