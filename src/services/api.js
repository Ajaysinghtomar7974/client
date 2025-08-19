import axios from "axios"

const API= axios.create({
    baseURL:"https://server-o2cb.onrender.com",
    withCredentials:true,
})

export default API;