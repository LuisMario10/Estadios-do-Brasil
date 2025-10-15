import { _DATABASE, ETableName } from "../../config";
import { TStadium } from "../../../@types";

export const deleteStadiumProvider = (stadiumDatas: Partial<TStadium>): number  | Error => {
    try {
        _DATABASE
            .prepare(`DELETE FROM ${ETableName.stadiuns} WHERE id = ?`)
            .run(stadiumDatas.id);

        return 1;

    } catch {
        return Error("Erro ao deletar Estadio");
    }
};