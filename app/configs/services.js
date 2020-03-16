import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('api/v1/users/login', params),
  signUp: async params => post('api/v1/users/register', params),
  getSoal: async () => get('api/v1/quiz'),
  getSoalById: async type => get(`api/v1/${type}`),
  // getSoalByIdFitri: async id => get(`api/v1/fitri/?id=${id}`),
  // getSoalByIdAdha: async id => get(`api/v1/adha/?id=${id}`),
  // getSoalByIdUH: async id => get(`api/v1/fitri/?id=${id}`),
  getJawaban: async type => get(`/api/v1/${type}/jawaban`)
};

export default { endpoint };
