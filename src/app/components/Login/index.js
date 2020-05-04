import React from 'react';
import css from './index.scss';

const Login = () => {
    return (
        <a href="#" className={css["login"]}>
            <span className={`${css['login__icon']} icon-login`} />
            <span className={css["login__text"]}>
                <span className={css["login__sing-in"]}>Войти</span> через Unsplash
            </span>
        </a>
    )
}

export default Login;
