import express, { Express } from 'express';
import { _ROUTER } from './routers';
import 'dotenv/config'

export const _APP: Express = express();

_APP.use(express.json());

_APP.use(_ROUTER);

_APP.listen(process.env.PORT || 2345, () => {
  console.log("Servidor no Ar!!!");
});