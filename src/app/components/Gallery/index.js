import css from './index.scss';

import React from 'react';

// components
import Post from '../Post/index';
import Title from '../Title/index';
import Login from '../Login/index';
import Copyright from '../Copyright/index';
import Preloader from '../Preloader/index';

//helpers
import {unsplashPhotoList as photoList}  from '../../helpers/unsplash';

let page = 1;
class Gallery extends React.Component {
    componentDidMount(){
        this.observeTrigger = document.querySelector('.observeTrigger');
        let options =  {
           rootMargin: '500px',
           threshold: 0
        }
        let callback = (entries, observe) => {
            if (entries[0].isIntersecting) {
                let contextEl = this.observeTrigger;
                contextEl.classList.add(css['loaded']);
                photoList(++page, 10, res => {
                    contextEl.classList.remove(css['loaded']);
                    window.scrollBy(0, -70);
                    this.props.addPhotoToList(res);
                })
            }
        }

        this.observer = new IntersectionObserver(callback, options);
        this.observer.observe(this.observeTrigger);
    }
    componentWillUnmount(){
        this.observer.unobserve(this.observeTrigger);
    }
    render() {
        const {
            state,
            signOut,
            likePhoto,
            unlikePhoto,
        } = this.props;
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

                    <div className={`observeTrigger ${css['observeTrigger-wrapper']}`} onClick={(ev)=>{
                            let contextEl = ev.target;
                            contextEl.classList.add(css['loaded']);
                            photoList(++page, 10, res => {
                                contextEl.classList.remove(css['loaded']);
                                window.scrollBy(0, -70);
                                this.props.addPhotoToList(res);
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
}

export default Gallery;
