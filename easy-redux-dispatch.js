import { useDispatch } from "react-redux"

/**
 * @returns
 */
export default () => {

    const dispatch =  useDispatch();

    /**
     * 
     * @param {string} actionName 
     * @param {any} payload 
     */
    const fun = (actionName, payload) => { dispatch({type: actionName, payload}) }

    return fun

}