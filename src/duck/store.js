import {createStore, compose, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware), composeWithDevTools()
));

sagaMiddleware.run(rootSagas);

export default store;
