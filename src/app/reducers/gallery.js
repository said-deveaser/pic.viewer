let i = 1;

const Photos = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'ADD_PHOTO_TO_LIST':
            newState.photos =  [
                ...newState.photos,
                ...action.photos,
            ]

            return newState;
            break;

        case 'CHANGE_VIEWED_PHOTO':
            newState.viewedPhoto = action.photo;
            return newState;
            break;

        case 'SIGN_OUT':
            newState.user.token = null;
            localStorage.removeItem('token');
            return newState;
            break;

        case 'LIKE_PHOTO':
            newState.photos = newState.photos.map((photo) => {
                if (photo.id === action.id) {
                    let changedPhoto = {...photo};
                    changedPhoto.liked_by_user = true;
                    return changedPhoto;
                }
                return photo;
            })
            if (newState.viewedPhoto.id === action.id) {
                newState.viewedPhoto.liked_by_user = true;
            }
            return newState;
            break;

        case 'UNLIKE_PHOTO':
            newState.photos = newState.photos.map((photo) => {
                if (photo.id === action.id) {
                    let changedPhoto = {...photo};
                    changedPhoto.liked_by_user = false;
                    return changedPhoto;
                }
                if (newState.viewedPhoto.id === action.id) {
                    newState.viewedPhoto.liked_by_user = false;
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
