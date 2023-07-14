import CardContainer from './CardContainer';
import { PostsProvider } from './context/PostsContext';

export default function App() {
	return (
		<PostsProvider>
			<CardContainer />
		</PostsProvider>
	);
}
