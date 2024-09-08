import axios from "axios";

const ACCESS_KEY = 'X9LTGk6N7R2xAu-gSDUzxd-cQhw-2OppuklF3HlWmgY';

export const fetchImages = async (query, page = 1) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
        },
    });
    return response.data;
};