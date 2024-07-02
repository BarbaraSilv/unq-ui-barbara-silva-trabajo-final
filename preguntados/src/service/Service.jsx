import Axios from 'axios';


const URL = "https://preguntados-api.vercel.app"

const get = async (url) =>
    Axios.get(url)
        .then((response) => response)
        .catch((error) => Promise.reject(error.response.data))

const post = async (url, data) =>
    Axios.post(url, data)
        .then((response) => response)
        .catch((error) => Promise.reject(error.response.data))


const getDifficulty = () => {
    return get(`${URL}/api/difficulty`);
};

const getQuestions = (key) => {
    return get(`${URL}/api/questions?difficulty=${key}`);
}

const postAnswer = (data) => {
    return post(`${URL}/api/answer`, data)
}
const Service = {
    getDifficulty,
    getQuestions,
    postAnswer,

}
export default Service;        