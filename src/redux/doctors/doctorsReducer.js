import { ADD_DOCTOR, FILTERING_DOCTOR, REMOVE_DOCTOR, SEARCH_DOCTORS } from "./actionTypes/doctorTypes"
import { doctorState } from "./doctorState"

export const doctorReducer = (state = doctorState, action) => {
    switch (action.type) {
        // add doctor from state 
        case ADD_DOCTOR:
            return {
                ...state,
                doctors: [...state.doctors, action.payload]
            }
        // remove doctor from state 
        case REMOVE_DOCTOR:
            const removeDoctor = state.doctors.filter(doctor => {
                return doctor.id !== action.payload
            });
            return {
                ...state,
                doctors: removeDoctor
            }
        // filtering doctor from state check filtering by all, active, inactive, out of clinic
        case FILTERING_DOCTOR:
            // ** if filtering by all ** \\
            if (action.payload === "all") {
                return {
                    ...state,
                    doctors: state.allDoctors
                }
            }
            // ** filtering by without all values  ** \\
            const filteredDoctors = state.allDoctors?.filter(doctor => {
                return doctor.status === action.payload
            })
            return {
                ...state,
                doctors: filteredDoctors
            }
        // searching doctor from state filtering doctor by values for name, address, phone number, gender, degree, specialist, status
        case SEARCH_DOCTORS:
            // ** searching by all keys ** \\

            if (action.payload === "") {
                return {
                    ...state,
                    doctors: state.allDoctors
                }
            }

            const searchingDoctors = state.allDoctors.filter(doctor => {
                return doctor?.name.toLocaleLowerCase().includes(action?.payload.toLocaleLowerCase());
            });

            return {
                ...state,
                doctors: searchingDoctors
            }

        default:
            return state
    }
}