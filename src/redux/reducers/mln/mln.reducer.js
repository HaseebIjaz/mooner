
import { 
    MLN_LIST,
    GET_MLN_BY_ID,
    GET_MLN_WITHOUT_REFERALS_BY_ID,
    GET_MLN_REFERALS_BY_ID
 } from '../../actions/mln/mln.types';

const INITIAL_STATE = {
    mlnList: [],
    singleUserMln:[],
    referals:[],
    singleuser: "",
    singleMlnuser: "",
    total: '',
    next: '',
    previous: '',
    mlnById: "",
    loading: true,

}

const mlnReducer = (state = INITIAL_STATE, action,) => {

    switch (action.type) {
        case MLN_LIST:
            return { ...state, 
                mlnList: action.payload.data.results,
                total: action.payload.data.count,
                next: action.payload.data.next,
                previous: action.payload.data.previous,
                loading: false, 
            }
        case GET_MLN_BY_ID:
            return { ...state,
                singleUserMln: action.payload.user_details,
                referals:action.payload.referral_users,
                loading: false, }
        
        case GET_MLN_WITHOUT_REFERALS_BY_ID:
            return { ...state,
                singleuser: action.payload.data[0],
                loading: false, }

        case GET_MLN_REFERALS_BY_ID:
            return { ...state, singleMlnuser: action.payload.user_details, loading: false, }

        default:
            return state
    }
}
export default mlnReducer