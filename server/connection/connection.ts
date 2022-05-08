import { createConnection } from "typeorm";
import Coins from "../entity/Coins";
export const connection = createConnection({
    type: "postgres",
    host: `${process.env.Host}`,
    port: `${process.env.PORT}`,
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    entities: [
        Coins
    ],
    synchronize: true,
    logging: false
});