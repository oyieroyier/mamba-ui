import axios from 'axios';

const postsApi = axios.create({
	baseURL: 'https://dummyjson.com/posts',
});

export function getPosts() {
	postsApi.get('').then((res) => res.data);
}
