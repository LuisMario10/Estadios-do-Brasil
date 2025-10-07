import { development, test, production } from "./Enviroment";
import knex from "knex";

const getEnviroment = () => {
    switch (process.env.NODE_ENV) {
        case 'test': return test;
        
        case 'production': return production;

        default: return development
    }
}

export const Knex = knex(getEnviroment());