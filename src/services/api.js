import axios from 'axios';



export const url = 'https://instabackend1.herokuapp.com'

export const url_image = 'https://raw.githubusercontent.com/cientista1/instabackend/master/uploads/resized/';
const api = axios.create({
    baseURL: url,
})

export default api;