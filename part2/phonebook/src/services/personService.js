import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getPerson = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const updatePerson = (id, existingPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, existingPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getPerson, createPerson, deletePerson, updatePerson };
