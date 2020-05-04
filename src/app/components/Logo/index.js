import React from 'react';
import css from './index.scss';

const Logo = (props) => {
    return (
        <h1 className={`${props.parentClass} ${css['logo']}`}>
            <img
                src="/public/img/logo.png"
                className={css["logo__img"]}
                alt="pic viewer" />
        </h1>
    )
}

export default Logo;
