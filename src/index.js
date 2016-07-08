import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { ReenactorContainer } from './components/reenactor';

import reducer from './reducers';
import actions from './actions';
import rootSaga from './sagas';

require('../src/css/application.scss');

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        process.env.NODE_ENV !== 'production' && window.devToolsExtension ?
            window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(rootSaga);

store.dispatch(actions.fetchSpeechKeys());

ReactDOM.render(
    <Provider store={store}>
        <ReenactorContainer />
    </Provider>,
    document.getElementById('app')
);
