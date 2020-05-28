import React from 'react';
import css from './index.scss';

const Author = (props) => {
    const {user, parentClass} = props;
    return (
        <span className={`${parentClass} ${css['author']}`}>
            <span className={`${css['author__icon']} icon-user`} />
            <span className={css["author__name"]}>
                {user.name}
            </span>
            <a href={user.links.html} target="_blank" className={css["author__link"]}>@{user.username}</a>
        </span>
    )
}

export default Author;
