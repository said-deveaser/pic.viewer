import React from 'react';
import ReactDOM from 'react-dom';

// APP CONTAINER
import Picviewer from './containers/picviewer';

//redux
import { createStore } from 'redux';
//Reducer
import photosReducer from './reducers/gallery';

//hekpers
import {unsplashPhotoList, getToken, getViewedPhoto} from './helpers/unsplash';



const startApp = (photos, photo, token = null) => {
    const initialState = {
        photos: photos,
        viewedPhoto: photo,
        user: {
            token: token,
        },
    };
    console.log(initialState);

    const store = createStore(photosReducer, initialState);
    ReactDOM.render(
        <Picviewer store={store}/>,
        document.getElementById('app')
    )
}




const getDataStartApp = () => {
    getToken((token) => {
        unsplashPhotoList(1, 10, (photos)=>{
            getViewedPhoto((photo)=> {
                startApp(photos, photo, token)
            })
        })
    })
}
getDataStartApp();
