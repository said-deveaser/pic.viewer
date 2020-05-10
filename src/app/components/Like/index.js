import React from 'react';
import css from './index.scss';
import {likeUnsplashPhoto, unLikeUnsplashPhoto} from '../../helpers/unsplash';

const Like = (props) => {
    const {
        auth, likes, liked, parentClass, photoId, likePhoto,unlikePhoto
    } = props
    console.log(liked);
    const iconClass = liked ? css['likes__icon--liked'] : ' ';
    if (props.auth) {
        return (
            <span className={`${parentClass} ${css['likes']}`}>
                <span className={`${css['likes__icon']} ${iconClass} icon-heart`} onClick={(ev)=> {
                        const el = ev.target;
                        el.classList.add(css['likes__icon--loading'])
                        if (!liked) {
                            likeUnsplashPhoto(photoId, (id) => {
                                likePhoto(id);
                            })
                        } else {
                            unLikeUnsplashPhoto(photoId, (id)=> {
                                unlikePhoto(id);
                            })
                        }
                    }}/>
                <span className={css["likes__count"]}>{likes}</span>
            </span>
        )
    }
    return (
        <span className={`${parentClass} ${css['likes']}`}>
            <span className={`${css['likes__icon']} icon-heart`} />
            <span className={css["likes__count"]}>{likes}</span>
            <div className={css['likes__modal']}>Войдите, чтобы&nbsp;поставить&nbsp;лайк</div>
        </span>
    )
}

export default Like;
