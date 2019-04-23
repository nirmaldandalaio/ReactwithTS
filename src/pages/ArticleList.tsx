import React from 'react';
import { IArticles } from '../model/IArticles';

const ArticleList = (props: any) => {
    return (
        <div>
            {props.children[0].title}
        </div>
    );
}

export default ArticleList;