import supertest from "supertest";
import { _APP } from "../src/App";

export const testApp = supertest(_APP);