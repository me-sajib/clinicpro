import { ADD_DOCTOR, ALL_DOCTORS, FILTERING_DOCTOR, REMOVE_DOCTOR, SEARCH_DOCTORS } from "../actionTypes/doctorTypes"

/**
 * all_doctors action
 * @returns {Object}
 */
export const all_doctors = () => {
    return {
        type: ALL_DOCTORS
    }
}

/**
 * search_doctors action
 * @param {*} values values to add
 * @returns {Object}
 */
export const search_doctors = (values) => {
    return {
        type: SEARCH_DOCTORS,
        payload: values
    }
}

/**
 * filtering_doctor action
 * @param {*} values values to add
 * @returns {Object}
 */
export const filtering_doctor = (values) => {
    return {
        type: FILTERING_DOCTOR,
        payload: values
    }
}

/**
 * add_doctor action
 * @param {*} values values to add
 * @returns {Object}
 */
export const add_doctor = (values) => {
    return {
        type: ADD_DOCTOR,
        payload: values
    }
}

/**
 * remove_doctor action
 * @param {*} id doctor id
 * @returns {Object}
 */
export const remove_doctor = (id) => {
    return {
        type: REMOVE_DOCTOR,
        payload: id
    }
}