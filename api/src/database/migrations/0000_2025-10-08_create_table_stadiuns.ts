import { _DATABASE, ETableName } from "../config"

export const up = () => {
    return _DATABASE
    .prepare(`CREATE TABLE ${ETableName.stadiuns} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                capacidade TEXT NOT NULL,
                data_construcao TEXT
            );`)
    .run();
}

export const down = () => {
    return _DATABASE
    .prepare(`DROP TABLE ${ETableName.stadiuns}`)
    .run();
}