import React from 'react';
import css from './index.scss';

const Like = (props) => {
    return (
        <span className={`${props.parentClass} ${css['likes']}`}>
            <span className={`${css['likes__icon']} icon-heart`} />
            <span className={css["likes__count"]}>46</span>
        </span>
    )
}

export default Like;
