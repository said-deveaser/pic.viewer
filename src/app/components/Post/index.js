import React from 'react';
import css from './index.scss';
import { Link } from 'react-router-dom';

import Like from '../Like/index';
import Author from '../Author/index';

const Post = (props) => {
    return (
        <div className={`${css['post']} ${props.parentClass}`}>
            <Link to="/photo/" className={css["post__img-wrapper"]}>
                <img
                    src="/public/img/photo.jpg"
                    alt="Фото автора"
                    className={css["post__img"]} />
            </Link>
            <div className={css["post__description"]}>
                <div className={css["post__information"]}>
                    <Author parentClass={css['post__author']}/>
                    <span className={`${css['post__publish-date']} ${css['publish-date']}`}>
                        published: 25.01.2020
                    </span>
                </div>
                <Like parentClass={css['post__likes']}/>
            </div>
        </div>
    )
}

export default Post;
