import React from 'react';
import css from './index.scss';

const Author = (props) => {
    return (
        <span className={`${props['parentClass']} ${css['author']}`}>
            <span className={`${css['author__icon']} icon-user`} />
            <span className={css["author__name"]}>
                {props.user.name}
            </span>
            <a href={props.user.links.html} target="_blanc" className={css["author__link"]}>@{props.user.username}</a>
        </span>
    )
}

export default Author;
