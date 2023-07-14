import { useContext } from 'react';
import PostsContext from './context/PostsContext';

const CardContainer = () => {
	const { posts } = useContext(PostsContext);

	return (
		<>
			{posts.map((post) => (
				<h1>{post.title}</h1>
			))}
		</>
	);
};

export default CardContainer;
