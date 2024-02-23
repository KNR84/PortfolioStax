// This provides the state value of the users array, as well as methods to fetch all users and add a new user.
const baseUrl = '/api/user';

export const getAllUsers = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};
