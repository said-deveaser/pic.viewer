import React from 'react';
import css from './index.scss';
import Logo from '../Logo/index';

const Title = (props) => {
    return (
        <article className={`${css['title']} ${props.parentClass}`}>
            <Logo parentClass={css['title__logo-wrapper']} />
            <p className={css["title__text"]}>
                Платформа для просмотра<br />свежих фотографий
            </p>
        </article>
    )
}

export default Title;
