# @binark/easy-react-redux

#### Setup react redux has never been easy like that

## Install

```bash
npm install --save @binark/easy-react-redux
```

## Usage

> actions.js
```js
/**
 * @param 'state' the redux state
 * @param 'data' the data to update the state. for this case it is {count: number}
 **/
const increments = (state, data) => {
    retunr {...state, count: state.count + data}
}

/**
 * @param 'state' the redux state
 * @param 'data' the data to update the state. for this case it is {count: number}
 **/
const decrements = (state, data) => {
    retunr {...state, count: state.count - data}
}

export default {increments, decrements};
```

> store.js
```js
import actions from './actions.js';
import { easyStore } from '@binark/easy-react-redux'

export default easyStore({'click': {actions}});
```
> index.js
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

> component/Header.jsx (use the easy selector)
```jsx
import React from 'react';
import { useEasyReduxSelector } from '@binark/easy-react-redux';

const Header = () => {
    const {count} = useEasyReduxSelector('click');
    return (
        <div>
            The count value is:  {count}
        </div>
    );
};

export default Header;
```
> component/Home.jsx (use the easy dispath)
```jsx
import React from 'react';
import { useEasyReduxDispatch } from '@binark/easy-react-redux';

const Home = () => {
    const dispatch = useEasyReduxDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch('increments', 1)}}>Increments 1</button>
            <button onClick={()=>{dispatch('increments', 3)}}>Increments 3</button>
            <button onClick={()=>{dispatch('decrements', 1)}}>Decrements 1</button>
            <button onClick={()=>{dispatch('decrements', 2)}}>Decrements 2</button>
        </div>
    );
};

export default Home;
```
### What about initial state ?

There is two ways to define initialstate

* inside easyStore function
```
easyStore({key: {actions: actions, initialState: myState}})
```

* Inside actions file

> actions.js

```js
const initialState = () => {
    return {} // your state
}

...

export default {initialState, ...}
```

## API

##### easyStore

* syntaxe

```js
easyStore(options)
```
* paramaters
    * **options**: {key: {actions, initialState, caseSisitive}}

        * **_key_**: string "The reducer key that selector will use"
        * **_actions_**: Array | Object "the set of actions for that reduce"
        * **_initialState_**: any default {} "The initial state"
        * **_caseSisitive_**: boolean default false "by default, you can define action like **increMente** and dispatch it like **dispath('incremente', data)**
    
* return
Return the redux store
##### useEasySelector

* syntaxe

```js
useEasySelector(key)
```

* parameters
    * **key** : string, It is the reducer key defined in easyStore function
* return
Return the state
* example
```js
const state = useEasySelector('my_key');
console.log(state.foo)
```

##### useEasyDispatch

* syntaxe

```js
useEasyDispatch(actionName, data)
```

* parameters
    * **actionName** : string, It is the reducer key defined in easyStore function
    * **data** : any, The data to update the state
* example
```js
const dispath = useEasyDispatch();
dispath('my_action_name", foo);
```