/* eslint-disable */
const BASE_URL = 'https://mate.academy/students-api';
const todos = '/todos';

const request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => {
      if (!response.ok) {
      throw (`${response.status}`)
      }
      
      return response.json();
  })
}

export const getTodos = () => {
  return request(todos)
}

export const getUsers = () => {
  return request('/users')
}

export const getUser = (userId) => {
  return request(`/users/${userId}`)
}
