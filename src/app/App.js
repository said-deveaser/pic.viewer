import React from 'react';
import ReactDOM from 'react-dom';



import Picviewer from './containers/picviewer';
// import { createStore } from 'redux';
// import galleryReducer from './reducers/gallery';

// let initialState = {};
// let store = createStore(galleryReducer, initialState);

ReactDOM.render(
    <Picviewer />,
    document.getElementById('app')
)
