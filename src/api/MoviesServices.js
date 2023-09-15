import axios from "axios";

const API_KEY = 'b9dd982af8e20fe960130b7c0b756d36';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseURL = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static getMovies(){
        return axios.get(withBaseURL('movie/popular'))
    }

    static getMovieById(id) {
        return axios.get(withBaseURL(`movie/${id}`))
    }
}