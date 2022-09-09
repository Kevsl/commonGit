import axios from "axios";

export async function getMovies(search) {
  return axios
    .get(` http://www.omdbapi.com/?i=tt3894198&apikey=50614318&s=${search}`)
    .then((res) => res.data);
}