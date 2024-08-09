import axios from "axios";

const privateApi = axios.create({
   baseURL: "https://fakestoreapi.com/",
});

export default privateApi;