import css from './index.scss';

import React from 'react';

import Post from '../Post/index';
import Title from '../Title/index';
import Login from '../Login/index';

const Gallery = () => {
    return(
        <div className={`${css['container']} ${css['app-page']}`}>

            <div className={css["app-page__left"]}>
                <div className={css["fixed-wrapper"]}>
                    <aside className={css["aside"]}>

                        <Title parentClass={css['aside__title']} />

                        <div className={css["aside__login"]}>
                            <Login />
                        </div>

                    </aside>
                    <div className={css["copyright"]}>
                        <span className={`${css["copyright__text"]}`}>
                            Изображения защищены авторским правом.
                        </span>
                    </div>
                </div>
            </div>

            <main className={`${css['gallery']} ${css['app-page__right']}`}>
                <Post parentClass={css['gallery__item']}/>
                <Post parentClass={css['gallery__item']}/>
                <Post parentClass={css['gallery__item']}/>
                <Post parentClass={css['gallery__item']}/>
                <Post parentClass={css['gallery__item']}/>
            </main>
        </div>
    )
}

export default Gallery;
