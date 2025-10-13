import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";


export const getByIDStadiumProvider = (stadiumDatas: TStadium) => {
    try {
        const dataBaseResult = _DATABASE
            .prepare(`SELECT * FROM ${ETableName.stadiuns} WHERE id = ?`)
            .get( stadiumDatas.id);

        return dataBaseResult;

    } catch(error) {
        console.log(error);

        return error
    }
};