import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import toDoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(toDoSagas)



export default store;

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]