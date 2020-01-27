import { ADDED_TO_QUEUE } from '../constants/action-types'
  
export const addToQueue = url => ({
    type: ADDED_TO_QUEUE,
    payload: url
 });