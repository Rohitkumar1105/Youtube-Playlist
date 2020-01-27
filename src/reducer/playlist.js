import { ADDED_TO_QUEUE } from '../constants/action-types'

const initState = {
    queue:[]
}


const addToPlaylist = (state = initState, action) => {
    if (action.type ===  ADDED_TO_QUEUE) {
        return {
            ...state,
            queue: action.payload,
        }
    } 
    return state;
}
export default addToPlaylist
