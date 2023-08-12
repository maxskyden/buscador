import axios from "axios";

// 57100000/json/
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
})
export default api