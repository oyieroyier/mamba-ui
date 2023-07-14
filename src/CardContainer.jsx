import { useContext } from 'react';
import PostsContext from './context/PostsContext';
import Card from './Card';

const CardContainer = () => {
	const { posts } = useContext(PostsContext);

	return (
		<section className="flex gap-4 flex-wrap p-10">
			{posts.map((post) => (
				<Card key={post.id} title={post.title} body={post.body} />
			))}
		</section>
	);
};

export default CardContainer;
