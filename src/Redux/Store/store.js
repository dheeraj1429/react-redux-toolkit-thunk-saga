import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers';
import createSagaMiddleware from 'redux-saga';
import indexSaga from '../SagaActions/indexSaga';
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Then run the saga
sagaMiddleware.run(indexSaga);
export default store;
