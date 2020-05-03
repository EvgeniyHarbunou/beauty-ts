import { createConnection } from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5555,
    username: "dev",
    password: "dev",
    database: "dev",
    entities: [
        SuperHero,
        Power
    ],
    synchronize: true,
    logging: true
});