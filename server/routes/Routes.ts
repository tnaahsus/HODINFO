import {Request, Response} from "express";
import {Controller} from "../controller/controller";
class Routes {
    private controller: Controller;
    constructor() {
        this.controller = new Controller();
    }
    public routes(app): void {
        app.route('/')
            .get(this.controller.getAllCoins);
    }
}
export {Routes};