import * as CreateStadium from './Create';
import * as GetAllStadiuns from './GetAll';
import * as GetByIDStadium from './GetByID';
import * as UpdateStadium from './Update';
import * as DeleteStadium from './Delete';

export const StadiumProviders = {
    ...CreateStadium,
    ...GetAllStadiuns,
    ...GetByIDStadium,
    ...UpdateStadium,
    ...DeleteStadium
}