import axios from "axios";

const API = axios.create({
    baseURL:"https://reqres.in"
});

API.interceptors.request.use((req)=>{
    try {
        if(localStorage.getItem("profile").token){
            req.headers.Authorization= localStorage.getItem("profile").token
        }
        return req;
    } catch (error) {
        console.log("error",error.message)
    }
})

API.interceptors.response.use((res)=>{
  try {
    return res;
  } catch (error) {
    if(error?.response?.data?.statusCode===401 || error?.response?.data?.statusCode===403){
        localStorage.clear()
        localStorage.removeItem("persist:store");
        window.location = `${window.location.protocol}//${window.location.host}/login`
    }

    return Promise.reject(error)
  }
})


export const register = (data)=> axios.post(`${"base"}/registe`,data);
export const login = (data)=>axios.post(`https://reqres.in/api/login`,data);

