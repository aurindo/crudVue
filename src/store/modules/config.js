import Logger from '../../logger';

const LOGGER = Logger('./patient.js');

let appConfig = {
  state: {
    baseUrl: process.env.BASE_URL,
    apiPath: process.env.API_PATH,
  },
  mutations: {
  },
  getters: {
    baseUrl (state) {
      return state.baseUrl;
    },
    apiUrl (state) {
      return state.baseUrl + state.apiPath;
    },
  },
  actions: {
  }
};

export default appConfig;
