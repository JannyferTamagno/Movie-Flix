import axios from "axios";

// base api https://api.themoviedb.org/3/

//chave api ?api_key=3e4fbc6ef2fea74e1fbbe552660c2fbc

//token api eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTRmYmM2ZWYyZmVhNzRlMWZiYmU1NTI2NjBjMmZiYyIsInN1YiI6IjYyNzk0NTZlMjNkMjc4MDA2NjA3OTliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fU6SBYX4oHAFqowxK1zeZu8_UhHf-F81jF_n6DCKoNQ

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;