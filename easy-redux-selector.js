import { useSelector } from "react-redux"

/**
 * 
 * @param {string} name The reducer key
 * @returns {any}
 */
export default (name) => {

    const state =  useSelector(state => state);

    return state[name];
    
}