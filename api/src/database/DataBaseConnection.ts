import { _DATABASE } from "./config";
import { TStadium } from "../@types";

type TOptions = 'get-all' | 'get-by-id'

type TValues = string | [string, TStadium] | [string, Partial<TStadium>] | TStadium

export const dataBaseConnection = (query: string, values: TValues, options: TOptions) => {
    try {
        if(options === 'get-all') return _DATABASE.prepare(query).all();

        else if(options === 'get-by-id') return _DATABASE.prepare(query).run(values);

        else return _DATABASE.prepare(query).run(values);

    } catch(error) {
        return error;
    }
}