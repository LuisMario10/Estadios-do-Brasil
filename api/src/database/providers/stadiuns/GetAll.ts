import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";

//Depois eu tipo isso, primeiro tem que fazer funcionar

export const getAllStadiunsProvider = (stadiumDatas: TStadium) => {
    try {
        const dataBaseResult = _DATABASE
            .prepare(`SELECT * FROM ${ETableName.stadiuns}`)
            .all();

        return dataBaseResult;
    } catch {
        return Error("Erro ao pegar todos os Estadio")
    }
};