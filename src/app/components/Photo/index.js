import css from './index.scss';

import React from 'react';

import Like from '../Like/index';
import Logo from '../Logo/index';
import Login from '../Login/index';
import Author from '../Author/index';
import Back from '../Back/index';

const Photo = () => {
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
                            <Login />
                        </div>
                    </aside>
                </div>
            </div>
            <main className={`${css['gallery']} ${css['app-page__right']}`}>
                <div className={`${css['post']} ${css['gallery__ite$mcss']}`}>
                    <div className={css["post__top"]}>
                        <Back />
                    </div>

                    <Author parentClass={css['post__author']}/>

                    <div className={css["post__img-wrapper"]}>
                        <img
                            src="/public/img/photo.jpg"
                            alt="Фото автора"
                            className={css["post__img"]} />
                    </div>
                    <div className={css["post__description"]}>
                        <div className={css["post__information"]}>
                            <span className={`${css["post__publish-date"]} ${css["publish-date"]}`}>
                                published: 25.01.2020
                            </span>
                        </div>
                        <Like parentClass={css["post__likes"]}/>
                        {/*<span className={`${css["post__likes"]} ${css["likes"]}`}>
                            <span className={`${css['likes__icon']} icon-heart`} />
                            <span className={css["likes__count"]}>46</span>
                        </span>*/}
                    </div>
                </div>
                <div className={css["copyright"]}>
                    <span className={css["copyright__text"]}>
                        Изображения защищены авторским правом.
                    </span>
                </div>
            </main>
        </div>
    )
}

export default Photo;
