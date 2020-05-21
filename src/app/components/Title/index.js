import css from './index.scss';

import React from 'react';

//components
import Logo from '../Logo/index';

const Title = ({parentClass}) => {
    return (
        <article className={`${css['title']} ${parentClass}`}>
            <Logo parentClass={css['title__logo-wrapper']} />
            <p className={css["title__text"]}>
                Платформа для просмотра<br />свежих фотографий
            </p>
        </article>
    )
}

export default Title;
