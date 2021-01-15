import axios from 'axios';
//будем работать с инстансами-т.е. возьмем базовый url-и далее к нему лепить дополнения
const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=17aff601';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query=`${key}&s=${title}`;
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
