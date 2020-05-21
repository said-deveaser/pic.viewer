import css from './index.scss';

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <Link to='/' className={`${props.parentClass} ${css['logo']}`}>
            <img
                src="/public/img/logo.png"
                className={css["logo__img"]}
                alt="pic viewer" />
        </Link>
    )
}

export default Logo;
