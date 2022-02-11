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
const incremente = (state, data) => {
    retunr {...state, count: state.count + data}
}

/**
 * @param 'state' the redux state
 * @param 'data' the data to update the state. for this case it is {count: number}
 **/
const decremente = (state, data) => {
    retunr {...state, count: state.count - data}
}

export default {incremente, decrement};
```

> store.js
```js
import actions from './actions.js';
import { easyStore } from '@binark/eady-react-redux'

export default easyStore({'click', {actions}});
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
import { useEasyReduxSelector } from '@kenany/binark-easy-react-redux';

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
import { useEasyReduxDispatch } from '@kenany/binark-easy-react-redux';

const Home = () => {
    const dispatch = useEasyReduxDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch('incremente', 1)}}>Increment 1</button>
            <button onClick={()=>{dispatch('incremente', 3)}}>Increment 3</button>
            <button onClick={()=>{dispatch('decremente', 1)}}>Decrement 1</button>
            <button onClick={()=>{dispatch('decremente', 2)}}>Decrement 2</button>
        </div>
    );
};

export default Home;
```