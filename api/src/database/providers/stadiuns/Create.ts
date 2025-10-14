import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";

export const createStadiumProvider=  (stadiumDatas: Partial<TStadium>): number | bigint | Error => {
    try {
        const dataBaseResult = _DATABASE
        .prepare(`INSERT INTO ${ETableName.stadiuns} VALUES (?, ?, ?)`)
        .run(
            stadiumDatas.name, 
            stadiumDatas.capacity,
            stadiumDatas.constructionDate
        );

        return dataBaseResult.lastInsertRowid

    } catch(error) {
        return Error("Erro ao criar registro de Estadio")
    }
};