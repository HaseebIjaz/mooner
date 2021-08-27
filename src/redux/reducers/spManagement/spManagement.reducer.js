
import { 
    SP_LOADING,
    GET_ALL_SP_lIST,
    REMOVE_SP_LOADING,
    SERVICE_PROVIDER_RATING,
    SEARCH_SERVICE_PROVIDER,
    DELETE_SERVICE_PROVIDER,
    UPDATE_SERVICE_PROVIDER_STATUS,
    GET_SERVICE_PROVIDER_BY_ID,
    SERVICE_PROVIDER_ACTIVE_BOOKINGS,
    SERVICE_PROVIDER_COMPLETED_BOOKINGS,
    UPDATE_SERVICE_PROVIDER_PROFILE,
} from '../../actions/spManagement/spmanagement.types';

const INITIAL_STATE = {
    allSpList: [],
    total: '',
    next: '',
    previous: '',
    spById: "",
    sp_active_bookings:[],
    sp_complete_bookings:[],
    sp_ratings:[],
    updatedSPData: '',
    loading: true,
    sp_all_active_bookings:[],
    sp_all_completed_bookings:[],
    sp_all_ratings:[],
    


}

const ServiceProviderReducer = (state = INITIAL_STATE, action,) => {
    switch (action.type) {
        case GET_ALL_SP_lIST:
            return { ...state, 
                allSpList: action.payload.data.results,
                total: action && action.payload && action.payload.data && action.payload.data.count,
                next: action && action.payload && action.payload.data && action.payload.data.next,
                previous: action && action.payload && action.payload.data && action.payload.data.previous,
                loading: false,
            }
        case GET_SERVICE_PROVIDER_BY_ID:
            return { 
                ...state,
                spById: action.payload.sp_detail,
                sp_active_bookings: action.payload.sp_active_bookings,
                sp_complete_bookings: action.payload.sp_complete_bookings,
                sp_ratings: action.payload.sp_ratings,
                loading: false, 
            }
        case UPDATE_SERVICE_PROVIDER_STATUS:
            return { ...state, updatedSPData: action.payload, loading: false, }
          
        case UPDATE_SERVICE_PROVIDER_PROFILE:
            return { ...state, loading: false, }
              
        case SERVICE_PROVIDER_ACTIVE_BOOKINGS:
            return { 
                ...state, 
                sp_all_active_bookings: action.payload.sp_active_bookings.results,
                total: action.payload.sp_active_bookings.count,
                next: action.payload.sp_active_bookings.next,
                previous: action.payload.sp_active_bookings.previous,
                loading: false, 
            }
             
        case SERVICE_PROVIDER_COMPLETED_BOOKINGS:
            return { 
                ...state,
                sp_all_completed_bookings: action.payload.sp_active_bookings.results,
                total: action.payload.sp_active_bookings.count,
                next: action.payload.sp_active_bookings.next,
                previous: action.payload.sp_active_bookings.previous,
                loading: false, 
            }
                 
        case SEARCH_SERVICE_PROVIDER:
            return{
                allSpList: action.payload.data.results,
                total: action && action.payload && action.payload.data && action.payload.data.count,
                next: action && action.payload && action.payload.data && action.payload.data.next,
                previous: action && action.payload && action.payload.data && action.payload.data.previous,
                loading: false,
            }
        case DELETE_SERVICE_PROVIDER:
            return { ...state, allSpList: state.allSpList.filter(item=> item.id!==action.payload), loading: false, }
        case SP_LOADING:
            return { ...state, loading: true }
        case REMOVE_SP_LOADING:
            return { ...state, loading: false }
        default:
            return state
    }
}
export default ServiceProviderReducer