import React from 'react';
import css from './index.scss';

const Preloader = ({parentClass}) => {
    return (
        <div className={parentClass + ' ' + css['all-wrapper']} >

            <div
                className={css['spinningSquaresG-wrapper'] }
                >

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_1']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_2']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_3']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_4']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_5']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_6']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_7']}>
                </div>

                <div
                    className={css['spinningSquaresG'] + ' '+ css['spinningSquaresG_8']}>
                </div>

            </div>

        </div>
    )
}

export default Preloader;
