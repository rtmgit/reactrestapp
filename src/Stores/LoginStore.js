import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../Reducers/RootReducer';
import rootSaga from '../Sagas/ActionWatchers';

const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default configureStore;
