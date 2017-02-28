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
                img: require('../img/lycee.jpg'),
                bodyText: 'C’est ici que tout à commencé. Lors de mon année de Terminale Scientifique (2014-2015)' +
                ' j’ai choisi la nouvelle spécialité ISN (Informatique et Sciences du Numérique). Durant cette année' +
                ' là j’ai écrit mes premières lignes de code en Python, HTML et CSS. Cette matière était de loin ma' +
                ' préférée avec les mathématiques, grâce à elle j’ai découvert une vraie passion et aussi le métier' +
                ' que je veux faire.',
                type: 'formation'
            },
            {
                title: 'IUT Paris Descartes',
                img: require('../img/descartes.jpg'),
                bodyText: 'Désireux d’approfondir les bases en informatique que j’avais acquises au lycée, je me' +
                ' suis orienté vers un DUT, plutôt qu’une classe préparatoire où l’informatique aurait été beaucoup' +
                ' plus secondaire voire inexistante. Ce choix fut aussi motivé par les possibilités de poursuite' +
                ' d’études après l’obtention de mon diplôme à l’issu des ans, en effet de très bonnes écoles' +
                ' d’ingénieurs recrutent après un DUT.',
                type: 'formation'
            }
        ]
    };
}

export default connect(mapStateToProps)(ArticleList);
