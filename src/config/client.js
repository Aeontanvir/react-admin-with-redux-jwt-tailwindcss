import axios from 'axios';

const accessToken = null;
const API_URL = process.env.REACT_APP_API_URL;

const options = {
    baseURL: API_URL,
    headers: {
        Accept: 'application/json'
    }
};

if (accessToken) {
    options.headers['accessToken'] = accessToken;
}

const client = axios.create(options);

export default client;