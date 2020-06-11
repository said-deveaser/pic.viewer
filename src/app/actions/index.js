export const ADD_PHOTO_TO_LIST = 'ADD_PHOTO_TO_LIST';
export const SIGN_OUT = 'SIGN_OUT';
export const LIKE_PHOTO = 'LIKE_PHOTO';

export const addPhotoToList = (photos) => ({type: ADD_PHOTO_TO_LIST, photos: photos});
export const signOut = () => ({type: SIGN_OUT});
export const likePhoto = (id) => ({type: LIKE_PHOTO, id});