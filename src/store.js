import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { loadState } from './services/localStorage.service'

const persistedState = loadState();
const middleware = [thunk];

console.warn('persistedState', persistedState);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;