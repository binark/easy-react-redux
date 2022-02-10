import { combineReducers } from "redux";

/**
 * 
 * @param {{[x:string]: Function} | Function[]} actions 
 * @param {boolean} caseSisitive
 * @param {any} initialState
 * @returns 
 */
const builder = (actions, caseSisitive = false, initialState) => {

/**
 * @type {{[key: string]: Function}}
 */
let mapFunction = {};

let init = {};

const initialStateName = !caseSisitive ? 'initialState'.toLowerCase() : 'initialState';

if (!caseSisitive) {

    if (Array.isArray(actions)) {
        actions.forEach((val) => {mapFunction[val.name.toLowerCase()] = val })
    } else {
        for (const name in actions) {
            mapFunction[name.toLowerCase()] = actions[name];
        }
    }

} else {
    if (Array.isArray(actions)) {
        actions.forEach((val) => {mapFunction[val.name] = val })
    } else {
        mapFunction = {...actions};
    }
}

if (initialState) {
    init = initialState
} else if (mapFunction[initialStateName]) {
    init = mapFunction[initialStateName].call(null);
}

    const executor = (state = init, action) => {
        
        const type = !caseSisitive? action?.type?.toLowerCase() : action?.type;

        /**
         * @type Function
         */
        const fn = mapFunction[type];

        if (fn) {
            return fn.call(null, state, action.payload)
        };
        return state
    }

    return executor

}

/**
 * 
 * @param {{[key: string]: { actions: {[key: string]: Function} | Function[], caseSisitive: boolean, initialState: any}}} options 
 * @returns 
 */
 const register = (options) => {

    const mapper = {};

    for (const key in options) {

        const {actions, caseSisitive, initialState} = options[key];
        const reducer = builder(actions, caseSisitive, initialState);
        mapper[key] = reducer;
        
    }

    return combineReducers(mapper)
}

export default register;
