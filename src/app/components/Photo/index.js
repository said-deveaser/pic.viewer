import css from './index.scss';

import React from 'react';

import Like from '../Like/index';
import Logo from '../Logo/index';
import Login from '../Login/index';
import Author from '../Author/index';
import Back from '../Back/index';
import Copyright from '../Copyright/index';
import Preloader from '../Preloader/index';

const Photo = (props) => {
    const {likePhoto, unlikePhoto} = props;
    if (props.state.viewedPhoto.id) {
        const photo = props.state.viewedPhoto;
        return (
            <div className={`${css['container']} ${css['app-page']}`}>
                <div className={css["app-page__left"]}>
                    <div className={css["fixed-wrapper"]}>
                        <aside className={css["aside"]}>
                            <article className={`${css['title']} ${css['aside__title']}`}>

                                <Logo parentClass={css['title__logo-wrapper']}/>

                                <p className={css["title__text"]}>
                                    Платформа для просмотра<br />свежих фотографий
                                </p>
                            </article>
                            <div className={css["aside__login"]}>

                                <Login signOut={props.signOut} auth={props.state.user.token}/>

                            </div>
                        </aside>
                    </div>
                </div>
                <main className={`${css['gallery']} ${css['app-page__right']}`}>
                    <div className={`${css['post']} ${css['gallery__ite$mcss']}`}>
                        <div className={css["post__top"]}>

                            <Back />

                        </div>

                        <Author user={photo.user} parentClass={css['post__author']}/>

                        <div className={css["post__img-wrapper"] + ' ph-wrapper ' + css['post__img-wrapper--loading']}>
                            <img src={photo.urls.regular}
                                 alt={photo.alt_description}
                                 onLoad={()=>{
                                     const elem = document.querySelector('.ph-wrapper');
                                     console.log(elem);
                                     elem.classList.remove(css['post__img-wrapper--loading']);
                                 }}
                                 className={css["post__img"]} />
                             <Preloader parentClass={css['preloader']}/>
                        </div>
                        <div className={css["post__description"]}>
                            <div className={css["post__information"]}>
                                <span className={`${css["post__publish-date"]} ${css["publish-date"]}`}>
                                    published: {(new Date(photo.created_at)).toLocaleString('ru')}
                                </span>
                            </div>

                            <Like
                                likes={photo.likes}
                                parentClass={css["post__likes"]}
                                auth={props.state.user.token}
                                liked={photo.liked_by_user}
                                auth={props.state.user.token}
                                photoId={photo.id}
                                likePhoto={likePhoto}
                                unlikePhoto={unlikePhoto}/>

                        </div>
                    </div>

                    <Copyright />

                </main>
            </div>
        )
    }

}

export default Photo;
