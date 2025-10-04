import * as Create from "./Create";
import * as GetAll from "./GetAll";
import * as GetByID from "./GetByID"
import * as Update from "./Update";
import * as Delete from "./Delete"

export const StadiunsController = {
    ...Create, 
    ...GetAll, 
    ...GetByID, 
    ...Update, 
    ...Delete
}