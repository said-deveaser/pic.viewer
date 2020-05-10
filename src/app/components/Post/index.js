import React from 'react';
import css from './index.scss';
import { NavLink as Link } from 'react-router-dom';

import {getPhoto} from '../../helpers/unsplash'

import Like from '../Like/index';
import Author from '../Author/index';

// srcSet={`${photo.urls.small} , ${photo.urls.raw} ,  ${photo.urls.regular}`}


const Post = (props) => {
    const {
        state,
        changeViewedPhoto,
        likePhoto,
        unlikePhoto,
    } = props;
    let idPrefix = 0;
    return state.photos.map((photo) => {
        return (
                <div key={`${photo.id}_${(idPrefix++)}`} className={`${css['post']} ${props.parentClass}`}>
                    <Link to={`/photo/${photo.id}/`} className={css["post__img-wrapper"]}
                        onClick={(ev)=>{
                            const context = ev;
                            getPhoto(photo.id, (res)=>{
                                changeViewedPhoto(res);
                            })
                        }}>
                        <img
                            srcSet={`${photo.urls.small} 100w, ${photo.urls.regular} 500w`}
                            sizes='(max-width:6500px) 100px,
                                    (min-width: 6510px) 500w'
                            alt={photo.alt_description}
                            className={css["post__img"]} />
                    </Link>
                    <div className={css["post__description"]}>
                        <div className={css["post__information"]}>
                            <Author parentClass={css['post__author']} user={photo.user} />
                            <span className={`${css['post__publish-date']} ${css['publish-date']}`}>
                                published: {(new Date(photo.created_at)).toLocaleString('ru')}
                            </span>
                        </div>
                        <Like
                            parentClass={css['post__likes']}
                            likes={photo.likes}
                            auth={state.user.token}
                            photoId={photo.id}
                            liked={photo.liked_by_user}
                            likePhoto={likePhoto}
                            unlikePhoto={unlikePhoto}/>
                    </div>
                </div>
            )
    });

}

export default Post;
