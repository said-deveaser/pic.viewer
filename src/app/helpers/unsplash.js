import {acceskey, secretkey, callbackUrl} from '../config';
import fetch from 'node-fetch';
import Unsplash from 'unsplash-js';


//объект для доступа к API
export const unsplash = new Unsplash({
    accessKey: acceskey,
    secret: secretkey,
    callbackUrl: callbackUrl,
})
console.log(unsplash);
//последние фотографии
export const unsplashPhotoList = (page, perPage, handler) => {
    unsplash.photos.listPhotos(page, perPage, "latest")
      .then(res => res.json())
      .then(json => {
        handler(json);
      });

}
// фото по ID
export const getPhoto = (id, handler) => {
    unsplash.photos.getPhoto(id)
      .then(res => res.json())
      .then(json => {
        handler(json);
      });
}
// URL для овторизации
export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

//запрос токена
export const getUnsplasToken = (code, handler) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            unsplash.auth.setBearerToken(json.access_token);
            handler(json);
        })
}

// токен для авторизации null если не валидный
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

export const getUnsplashRandomPhoto = (handler) => {
    unsplash.photos.getRandomPhoto()
      .then(res => res.json())
      .then(json => {
        handler(json);
      });
}
//возвращает изначальное фото для просмотра на странице /photo/
export const getViewedPhoto = (handler) => {
    const urlObj = location.pathname.split('/');
    const path = urlObj[1];
    const imgId = urlObj[2];
    if (path === 'photo' && imgId) {
        getPhoto(imgId, (photo)=> {
            handler(photo)
        })
    } else {
        getUnsplashRandomPhoto((photo)=>{
            handler(photo);
        })
    }
}


export const likeUnsplashPhoto = (id, handler) => {
    unsplash.photos.likePhoto(id)
          .then(res => res.json())
          .then(json => {
              console.log('ЛАЙКНУЛИ:');
              console.log(json);
                handler(id)
          });
}

export const unLikeUnsplashPhoto = (id, handler) => {
    unsplash.photos.unlikePhoto(id)
      .then(res => res.json())
      .then(json => {
          console.log('АНЛАЙКНУЛИ:');
          console.log(json);
            handler(id)
      });
}
