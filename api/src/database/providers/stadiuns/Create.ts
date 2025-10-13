import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";

export const createStadiumProvider: number | bigint | unknown = (stadiumDatas: TStadium) => {
    try {
        const dataBaseResult = _DATABASE
            .prepare(`INSERT INTO ${ETableName.stadiuns} VALUES (?, ?, ?)`)
            .run(stadiumDatas.name, stadiumDatas.capacity, stadiumDatas.constructionDate);

        return { id: dataBaseResult.lastInsertRowid };

    } catch(error) {
        console.log(error);

        return error
    }
};