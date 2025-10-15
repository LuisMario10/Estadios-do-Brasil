import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";

export const updateStadiumProvider = (stadiumDatas: Partial<TStadium>): void => {
    try {
        _DATABASE
            .prepare(`UPDATE ${ETableName.stadiuns} SET (?, ?, ?) WHERE id = ?`)
            .run(stadiumDatas.name, stadiumDatas.capacity, stadiumDatas.constructionDate, stadiumDatas.id);

    } catch(error) {
        console.log(error);
    }
};