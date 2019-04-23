import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';
import { fetchArticles } from '../store/actions/actions';
import '../styles/App.css';
import { IArticles } from '../model/IArticles';

type Props = {
  fetchArticles: any,
  articles: IArticles,
}

class HomePage extends Component<Props> {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <ArticleList>{this.props.articles}</ArticleList>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles as IArticles
  }
}

export default connect(mapStateToProps, { fetchArticles })(HomePage);