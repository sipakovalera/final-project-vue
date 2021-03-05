import axios from 'axios';

function setInterceptors(store){
  axios.defaults.baseURL = "http://localhost:3000/users"
  
  axios.interceptors.request.use(
    function(config){
      const token = store.getters.isLoggedIn;
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    } 
  )
}

export default function SettingAxios(store) {
  setInterceptors(store)
  store.axios = axios
}
