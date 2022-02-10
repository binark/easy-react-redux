import store from "./reducer-register";
import selector from './easy-redux-selector';
import dispatch from './easy-redux-dispatch'

export const easyStore = store;
export const useEasyReduxSelector = selector;
export const useEasyReduxDispatch = dispatch;