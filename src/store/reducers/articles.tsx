import { SET_ARTICLES } from '../actions/actions';

export default function  articles(state = [], action = {} as any) {
    switch(action.type) {
        case SET_ARTICLES:
            return action.articles;

        default: return [{
        }]
    }
}