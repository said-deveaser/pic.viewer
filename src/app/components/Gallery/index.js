import css from './index.scss';


import React from 'react';

import Post from '../Post/index';
import Title from '../Title/index';
import Login from '../Login/index';
import Copyright from '../Copyright/index';
import Preloader from '../Preloader/index';

//helpers
import onPageEnd from '../../helpers/onPageEnd';
import {unsplashPhotoList as photoList}  from '../../helpers/unsplash';
let page = 1;


window.addEventListener('scroll', () => {
    onPageEnd(() => {
        if (location.pathname === '/') {
            let observeTrigger = document.querySelector('.observeTrigger');
            let event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            observeTrigger.dispatchEvent(event);
        }
    });
})


const Gallery = (props) => {

    const {
        state,
        addPhotoToList,
        signOut,
        likePhoto,
        unlikePhoto,
    } = props;
    console.log(state);
    return(
        <div className={`${css['container']} ${css['app-page']}`}>

            <div className={css["app-page__left"]}>
                <div className={css["fixed-wrapper"]}>
                    <aside className={css["aside"]}>
                        <Title parentClass={css['aside__title']} />

                        <div className={css["aside__login"]}>

                            <Login signOut={signOut} auth={state.user.token}/>

                        </div>

                    </aside>

                    <Copyright />

                </div>
            </div>

            <main className={`${css['gallery']} ${css['app-page__right']}`}>

                <Post
                    parentClass={css['gallery__item']}
                    state={state}
                    likePhoto={likePhoto}
                    unlikePhoto={unlikePhoto}/>

                <div className={`observeTrigger ${css['observeTrigger-wrapper']}`} onClick={(ev) => {
                        let contextEl = ev.target;
                        contextEl.classList.add(css['loaded']);
                        photoList(++page, 10, res => {
                            contextEl.classList.remove(css['loaded']);
                            addPhotoToList(res);
                        })
                     }}>
                    <Preloader parentClass={css['observeTrigger-wrapper__preloader']}/>
                    <div className={css['observeTrigger']}>
                        <span className={`icon-level-up ${css['observe-icon']}`}></span>
                        <span className={css['observe__text']}>Больше фотографий.</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Gallery;
