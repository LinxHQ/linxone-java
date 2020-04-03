import * as types from '../constant/CustomerTypes';


export function addCustomer(text) {
    return {
        type: types.ADD_CUSTOMER,
        text
    };
}

export function deleteCustomer(id) {
    return {
        type: types.DELETE_CUSTOMER,
        id
    };
}

export function editCustomer(id, text) {
    return {
        type: types.EDIT_CUSTOMER,
        id,
        text
    };
}