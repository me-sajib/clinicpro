import { createStore } from "redux";
import { doctorReducer } from "./doctors/doctorsReducer";

export const store = createStore(doctorReducer);