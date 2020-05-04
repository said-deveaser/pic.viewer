import React from 'react';
import css from './index.scss';

const Back = () => {
    return (
        <div className={css["back"]} onClick={() => {history.back()}}>
            <span className={`${css['back__icon']} icon-level-up`} />
            <span className={css["back__text"]}>Назад</span>
        </div>
    )
}

export default Back;
