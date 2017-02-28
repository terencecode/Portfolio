/**
 * Created by william on 25/02/17.
 */

import React from 'react';

import Article from './article';

class ArticleList extends React.Component {

    static propTypes = {
        articles: React.PropTypes.array,
        type: React.PropTypes.string
    };

    createArticleList() {
        return this.props.articles.filter((article) => this.props.type === article.type).map((article, index) =>
            <Article key={index} img={article.img} bodyText={article.bodyText} title={article.title} />);
    }
    render() {
        return (
        <div>
            {this.createArticleList()}
        </div>
        );
    }
}

export default ArticleList;
