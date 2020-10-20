import axios from 'axios';
import config from './../config';

//default config
axios.defaults.baseURL = config.API_URL;

//content type
axios.defaults.headers.post['content-type'] = 'application/json';

// intercepting to capture errors 

axios.interceptors.response.use(function(response) {
    return response.data ? response.data : response;
}, function(error) {
    // Any status code that falls outside the range of 2xx cause this function to triger

    let message;
    switch (error.status) {
        case 500: message = 'Internal Server Error'; break;
        case 404: message = 'Sorry! the data you are looking for cannot be found'; break;
        case 401: message = 'Invalid credentials'; break;
        default: message = error.message || error;
    }
    return Promise.reject(message);
});


/******\
 * set the default authorization
 * @param {*} token
 */

 const setAuthorization = (token) => {
     axios.defaults.headers.common['authorization'] = "Bearer" + token;
 }


 class APIClient {
     /**
      * Fetches data from given URL
      */

      get = (url, params) => {
          return axios.get(url, params);
      }
     
      
    /**
      * Post data to given URL
      */

      create = (url, data) => {
          return axios.post(url, data);
      }



    /**
      * Update data
      */

      update = (url, data) => {
          return axios.patch(url, data);
      }

      /**
      * Delete
      */

      delete = (url) => {
          return axios.delete(url);
      }
    

 }

 export { APIClient, setAuthorization };