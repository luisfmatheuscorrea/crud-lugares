import axios from 'axios';

const countries = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});

export default countries;