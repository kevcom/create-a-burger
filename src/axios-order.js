import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-306fc.firebaseio.com/'
});

export default instance;