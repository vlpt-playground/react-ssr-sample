import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../modules/articles';
import ArticlesList from '../components/ArticleList';

class ArticleListContainer extends Component {
  componentDidMount() {
    if (window.shouldCancel) return;
    this.props.getArticles();
  }

  render() {
    if (!this.props.list) return null;
    return <ArticlesList list={this.props.list} />;
  }
}

export default connect(
  state => ({
    list: state.articles.list
  }),
  {
    getArticles
  }
)(ArticleListContainer);
