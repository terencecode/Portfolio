/**
 * Created by william on 25/02/17.
 */

import React from 'react';
import {Col, Row} from 'react-bootstrap';

import Article from './article';

class ArticleList extends React.Component {
    createArticleList() {
        return this.props.articles.filter((article) => this.props.type === article.type).map((article, index) =>
                    <Row key={index} className="show-grid">
                        <Col>
                            <Article key={index} img={article.img} bodyText={article.bodyText} title={article.title} />
                        </Col>
                    </Row>
        );
    }
    render() {
        return (
        <div>
            {this.createArticleList()}
        </div>
        );
    }
}

ArticleList.propTypes = {
    articles: React.PropTypes.string,
    type: React.PropTypes.string
};

export default ArticleList;
