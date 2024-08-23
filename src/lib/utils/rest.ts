import { Axios } from 'axios';

export const restCar = new Axios({ timeout: 6000 ,baseURL: 'https://66c8a9c38a477f50dc2ee808.mockapi.io/api/v1' })