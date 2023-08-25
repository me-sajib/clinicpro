export const validateNumber = (number) => {
    // validate Bangladeshi phone number
    if (!/^\+?(88)?0?1[3456789][0-9]{8}\b/.test(number)) {
        return false;
    } else {
        return true;
    }
};