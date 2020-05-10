import React from 'react';
import css from './index.scss';
import {authenticationUrl} from '../../helpers/unsplash';
import {NavLink as Link} from 'react-router-dom';

const Login = (props) => {
    if (props.auth) {
        return(
            <div className={css['in-login']}>
                <span className={`${css['in-login__icon']} icon-user`} />
                <span className={css["in-login__text"]}>
                    <span className={css["in-login__sing-in"]}>Вы авторизированы</span>
                    <span  onClick={()=> {
                            props.signOut();
                        }} className={css['in-login-out']}>Выйти?</span>
                </span>
            </div>
        )
    } else {
        return (
            <a href={authenticationUrl} className={css["login"]}>
                <span className={`${css['login__icon']} icon-login`} />
                <span className={css["login__text"]}>
                    <span className={css["login__sing-in"]}>Войти</span> через Unsplash
                </span>
            </a>
        )
    }

}

export default Login;
