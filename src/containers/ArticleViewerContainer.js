import React, { Component } from 'react';
import ArticleViewer from '../components/ArticleViewer';
import { connect } from 'react-redux';
import { getArticle } from '../modules/articles';

class ArticleViewerContainer extends Component {
  initialize = () => {
    this.props.getArticle(this.props.id);
  };
  componentDidMount() {
    if (window.shouldCancel) return;
    this.initialize();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.initialize();
    }
  }
  render() {
    if (!this.props.article) return null;
    return <ArticleViewer article={this.props.article} />;
  }
}

export default connect(
  state => ({
    article: state.articles.item
  }),
  {
    getArticle
  }
)(ArticleViewerContainer);
