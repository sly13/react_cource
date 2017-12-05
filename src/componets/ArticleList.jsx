import React, {Component} from 'react';

import Acticle from './Article';

class ArticleList extends Component {
	state = {
		openArticleId: null
	}

	toggleOpenArticle(openArticleId) {
		this.setState({
			openArticleId
		})
	}

	render() {
		const articleElements = this.props.articles.map(article => (
			<li key={article.id}>
				<Acticle 
					article={article} 
					isOpen = {article.id === this.state.openArticleId}
					toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
				/>
			</li>
		));
	
		return (
			<ul>
				{articleElements}
			</ul>
		);
	}
}

export default ArticleList;
