/**
 * Created by william on 25/02/17.
 */

import {connect} from 'react-redux';

import ArticleList from '../components/partials/article-list';

function mapStateToProps() {
    return {
        articles: [
            {
                title: "Lycée Jeanne D'albret",
                img: 'img/lycee.jpg',
                bodyText: 'lorem ipsum',
                type: 'formation'
            },
            {
                title: 'IUT Paris Descartes',
                img: 'img/descartes.jpg',
                bodyText: 'lorem ipsum',
                type: 'formation'
            }
        ]
    };
}

export default connect(mapStateToProps)(ArticleList);
