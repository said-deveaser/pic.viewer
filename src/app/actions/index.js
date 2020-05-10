export const addPhotoToList = (photos) => {
    return {
        type: 'ADD_PHOTO_TO_LIST',
        photos: photos
    }
}

export const changeViewedPhoto = (photo) => {
    return {
        type: 'CHANGE_VIEWED_PHOTO',
        photo: photo
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    }
}

export const likePhoto = (id) => {
    return {
        type: 'LIKE_PHOTO',
        id,
    }
}
export const unlikePhoto = (id) => {
    return {
        type: 'UNLIKE_PHOTO',
        id,
    }
}
