import { TStadium } from "../../../@types"

declare module "knex/types/tables" {
    interface Tables {
        stadium: TStadium
    }
}