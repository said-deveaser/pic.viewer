import React from 'react';
import css from './index.scss';

const Author = (props) => {
    return (
        <span className={`${props['parentClass']} ${css['author']}`}>
            <span className={`${css['author__icon']} icon-user`} />
            <span className={css["author__name"]}>
                Karl En Dorient
            </span>
            <a href="#" className={css["author__link"]}>@kendork</a>
        </span>
    )
}

export default Author;
