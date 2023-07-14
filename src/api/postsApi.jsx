import axios from 'axios';

const postsApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const getPosts = () => postsApi.get('').then((res) => res.data);
