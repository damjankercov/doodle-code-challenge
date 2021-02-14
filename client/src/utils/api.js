import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        common: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    },
    responseType: 'json',
})

export default { instance: instance }