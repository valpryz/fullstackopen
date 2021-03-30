import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const edit = (editedPerson) => {
  const request = axios.put(`${baseUrl}/${editedPerson.id}`, editedPerson);
  return request.then((response) => response.data);
};

const services = {
  getAll,
  create,
  remove,
  edit,
};

export default services;
