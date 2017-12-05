import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    getBody() {
        return (this.props.isOpen ? <section>{this.props.article.text}</section> : null);
    }

    componentWillReceiveProps(nextProps) {
        console.log('--- updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        console.log('--- mounting');
    }

    setContainerRef = (ref) => {
        this.container = ref;
        console.log('---', ref);
    }

    render() {
        const { article } = this.props;
    
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>

                <button onClick={this.props.toggleOpen} >
                    {this.props.isOpen ? 'close' : 'open'}
                </button>

                {this.getBody()}

                <CommentList comments={article.comments} />
            </div>
        );
    }

    componentDidMount() {
        console.log('--- mounted');
    }
}

export default Article;
