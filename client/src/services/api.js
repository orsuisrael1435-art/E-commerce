import axios from "axios";

const API = axios.create({
    baseURL: "https://e-commerce-2-xv7g.onrender.com/api"
});

export default API;