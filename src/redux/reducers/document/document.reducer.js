import {
    GET_APPROVED_DOCUMENTS,
    GET_PENDING_DOC_lIST,
    PENDING_DOC_LOADING,
    DELETE_PENDING_DOC,
    GET_PENDING_DOC_BY_ID,
    REMOVE_PENDING_DOC_LOADING,
    DELETE_APPROVED_DOC
} from "../../actions/document/document.types";

const INITIAL_STATE = {
    aprovedList: [],
    aprovedById: {},
    count: "",
    doclist: [],
    total: '',
    next: '',
    previous: '',
    loading: false,
    pendingDocData:''
}

const documentReducer = (state = INITIAL_STATE, action,) => {

    switch (action.type) {
        case GET_APPROVED_DOCUMENTS:
            return { ...state, aprovedList: action.payload.results, count: action.payload.count }
 
        case GET_PENDING_DOC_lIST:
            return { ...state, 
                doclist: action.payload.data.results,
                total: action && action.payload && action.payload.data && action.payload.data.count,
                next: action && action.payload && action.payload.data && action.payload.data.next,
                previous: action && action.payload && action.payload.data && action.payload.data.previous,
                loading: false,
            }

        case GET_PENDING_DOC_BY_ID:
            return { 
                ...state,
                pendingDocData: action.payload,
                loading: false, 
            }
        case DELETE_PENDING_DOC:
            return { ...state, doclist: state.doclist.filter(item=> item.id!==action.payload), loading: false, }
        case DELETE_APPROVED_DOC:
            return { ...state, aprovedList: state.aprovedList.filter(item=> item.id!==action.payload), loading: false, }

        case PENDING_DOC_LOADING:
            return { ...state, loading: true }
        case REMOVE_PENDING_DOC_LOADING:
            return { ...state, loading: false }
        default:
            return state
        }
}
export default documentReducer;
