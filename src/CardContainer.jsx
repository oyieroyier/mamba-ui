import { useContext } from 'react';
import PostsContext from './context/PostsContext';

const CardContainer = () => {
	const { posts } = useContext(PostsContext);
	console.log(posts);
	return <div>CardContainer</div>;
};

export default CardContainer;
