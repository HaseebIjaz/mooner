import {
    GET_ALL_TICKETS,
    GET_TICKET,
    DELETE_TICKET
} from "../../actions/ticket/ticket.types";

const INITIAL_STATE = {
    data: [],
    dataById: {},
    count: "",
}

const ticketReducer = (state = INITIAL_STATE, action,) => {

    switch (action.type) {
        case GET_ALL_TICKETS:
            return { ...state, data: action.payload.results, count: action.payload.count }
        case GET_TICKET:
            return { ...state, dataById: action.payload[0] }
        case DELETE_TICKET:
            return { ...state, data: state.data.filter(item => item.id !== action.payload) };
        default:
            return state
    }
}
export default ticketReducer;
