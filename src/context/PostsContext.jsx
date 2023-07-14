import { createContext, useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/postsApi';
import Loading from '../components/Loading';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	const postsQuery = useQuery({
		queryFn: getPosts,
		queryKey: ['posts'],
	});
	useEffect(() => {
		if (postsQuery.data) return setPosts(postsQuery.data);
	}, [postsQuery]);

	if (postsQuery.isLoading) return <Loading />;
	if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>;

	return (
		<PostsContext.Provider value={posts}> {children}</PostsContext.Provider>
	);
};

export default PostsContext;
