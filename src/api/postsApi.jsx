import axios from 'axios';

const postsApi = axios.create({
	baseURL: 'https://dummyjson.com/posts',
});

export const getPosts = () => postsApi.get('').then((res) => res.data);
