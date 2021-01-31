import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    applyMiddleware(sagaMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

const store = createStore(rootReducer, compose(...middleware));

sagaMiddleware.run(rootSagas);

export default store;
