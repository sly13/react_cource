import React from 'react';

import { articles } from '../fuxtures';
import ArticleList from './ArticleList';

function App() {
	return (
		<ArticleList articles={articles} />
	);
}

export default App;
