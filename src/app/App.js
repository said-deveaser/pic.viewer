import React from 'react';
import ReactDOM from 'react-dom';

// modal image viewer API
import './../../public/js/jquery.fancybox.min';
import './../../public/css/jquery.fancybox.min.css';

// APP CONTAINER
import Picviewer from './containers/picviewer';

//redux
import { createStore } from 'redux';

//Reducer
import photosReducer from './reducers/gallery';

//helpers
import {unsplashPhotoList, getToken, getViewedPhoto} from './helpers/unsplash';



const startApp = (photos, photo, token = null) => {
    photos.map(eachPhoto => {
        if (photo !== null && eachPhoto.id == photo.id) {
            photo = null;
        }
    })
    if (photo !== null) {
        photos = [photo, ...photos];
    }
    const initialState = {
        photos: photos,
        user: {
            token: token,
        },
    };

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
