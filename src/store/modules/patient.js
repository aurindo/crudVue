import Logger from '../../logger';
import PatientService from '../../services/patient';

const LOGGER = Logger('./patient.js');

export default {
  namespaced: true,
  state: {
    patients: null
  },
  mutations: {
    patients (state, patients) {
      state.patients = patients;
    }
  },
  getters: {
    patients (state) {
      return state.patients;
    }
  },
  actions: {
    async list ({ commit, rootGetters }, id) {
      const patientService = new PatientService(rootGetters['apiUrl']);
      LOGGER.debug('Getting all patients');
      try {
        const response = await patientService.getAll(id);
        commit('patients', response.body);
      } catch (err) {
        LOGGER.error('Error while getting all patients, [%s]', JSON.stringify(err));
        throw new Error(err);
      }
    },
    emptyPatient ({ commit }) {
      commit('patients', []);
    },
  }
};
