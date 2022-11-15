import axios from "axios";
const baseUrl = `https://reqres.in/`;

const registerUtility = {
  register(data) {
    return axios.post(baseUrl + "api/register", { ...data });
  },
  auth(data) {
    return axios.post(baseUrl + "api/login", { ...data });
  },
  getUsers(page) {
    return axios.get(baseUrl + `api/users?page=${page}`);
  },
  getUserData(id) {
    return axios.get(baseUrl + `api/users/${id}`);
  },
};

export default registerUtility;
