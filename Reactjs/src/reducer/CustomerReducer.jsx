import { ADD_CUSTOMER, EDIT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constant/PostTypes';

const customerRepducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [
                
            ]
        case DELETE_CUSTOMER:
        case EDIT_CUSTOMER:
        case UPDATE_CUSTOMER:    
    }
}