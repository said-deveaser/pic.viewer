import css from './index.scss';
import React from 'react';

const Copyright = () => {
    return (
        <div className={css["copyright"]}>
            <span className={`${css["copyright__text"]}`}>
                Изображения защищены авторским правом.
            </span>
        </div>
    )
}
export default Copyright;
