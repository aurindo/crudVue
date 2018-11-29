import Vue from 'vue';
import Vuex from 'vuex';
import patient from './modules/patient';
import config from './modules/config';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    patient,
    config,
  },
  state: {
  },
  mutations: {
  }
});
