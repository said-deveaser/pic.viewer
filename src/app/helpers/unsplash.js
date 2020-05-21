import {acceskey, secretkey, callbackUrl} from '../config';
// Unsplash dependinces
import fetch from 'node-fetch';
// Unsplash core
import Unsplash from 'unsplash-js';


//API access obj
export const unsplash = new Unsplash({
    accessKey: acceskey,
    secret: secretkey,
    callbackUrl: callbackUrl,
})

//last photos
export const unsplashPhotoList = (page, perPage, handler) => {
    unsplash.photos.listPhotos(page, perPage, "latest")
      .then(res => res.json())
      .then(json => {
        handler(json);
  });
}

//take photo by id
export const getPhoto = (id) => {
    return unsplash.photos.getPhoto(id)
      .then(res => res.json())
      .then(json => {
          return json
      });
}

// URL for oauth
export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

//get bearer token
export const getUnsplasToken = (code, handler) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            unsplash.auth.setBearerToken(json.access_token);
            handler(json);
        })
}

// authentication
export const getToken = (handler) => {
    const code = location.search.split('code=')[1];
    let token = JSON.parse(localStorage.getItem('token'));
    if ((!token || token.error) && code) {
        getUnsplasToken(code, (json)=>{
            if (!json.error) {
                localStorage.setItem('token', JSON.stringify(json))
                handler(json);
            } else {
                handler(null)
            }
        })
    } else if (token && !token.error) {
        unsplash.auth.setBearerToken(token.access_token);
        handler(token);
    } else {
        handler(null);
    }
}

// check if inital path is /photo/:id then get :id photo added to initial state
export const getViewedPhoto = (handler) => {
    const urlObj = location.pathname.split('/');
    const path = urlObj[1];
    const imgId = urlObj[2];
    if (path === 'photo' && imgId) {
        getPhoto(imgId).then((photo)=> {
            handler(photo)
        })
    } else {
        handler(null);
    }
}

// like photo
export const likeUnsplashPhoto = (id, handler) => {
    unsplash.photos.likePhoto(id)
          .then(res => res.json())
          .then(json => {
                handler(id)
          });
}

// unlike photo
export const unLikeUnsplashPhoto = (id, handler) => {
    unsplash.photos.unlikePhoto(id)
      .then(res => res.json())
      .then(json => {
            handler(id)
      });
}
