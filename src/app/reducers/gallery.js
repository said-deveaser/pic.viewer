import {ADD_PHOTO_TO_LIST,SIGN_OUT,LIKE_PHOTO} from '../actions/index';
const Photos = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_PHOTO_TO_LIST:
            newState.photos =  [
                ...newState.photos,
                ...action.photos,
            ]

            return newState;
            break;

        case SIGN_OUT:
            newState.user.token = null;
            localStorage.removeItem('token');
            return newState;
            break;

        case LIKE_PHOTO:
            newState.photos = newState.photos.map((photo) => {
                if (photo.id === action.id) {
                    let changedPhoto = {...photo};
                    if  (changedPhoto.liked_by_user == false) {
                        changedPhoto.liked_by_user = true;
                        changedPhoto.likes = ++changedPhoto.likes
                        return changedPhoto;
                    } else {
                        changedPhoto.liked_by_user = false;
                        changedPhoto.likes = --changedPhoto.likes
                        return changedPhoto;
                    }
                }
                return photo;
            })
            return newState;
            break;

        default:
            return newState
            break;
    }
}

export default Photos;
