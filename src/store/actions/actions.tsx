import { IArticles } from "../../model/IArticles";

export const SET_ARTICLES = 'SET_ARTICLES';

export function setArticles(articles: IArticles) {
    return {
        type: SET_ARTICLES,
        articles
    }
}

export function fetchArticles() {
    return (dispatch: any) => {
        fetch('/api/articles')
            .then(res => res.json())
            .then(data => dispatch(setArticles(data.articles)));
    }
}