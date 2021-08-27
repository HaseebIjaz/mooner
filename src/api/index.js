import axios from "axios";

const API = axios.create({
    baseURL: "https://api.mooner.com.sg"
})

export default API