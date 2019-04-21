import Vue from 'vue';
import Logger from '../logger';

const LOGGER = Logger('services/patient.js');

export default class PatientService {
  constructor (apiUrl) {
    Vue.http.options.root = apiUrl;
  }

  async getById (id) {
    LOGGER.info('Getting patients by id');
    return Vue.http.get('patients/' + id);
  }

  async getAll () {
    LOGGER.info('Getting all patients');
    return Vue.http.get('patients');
  }

  async delete (id) {
    LOGGER.info('Deleting patient');
    return Vue.http.delete(`patients/${id}`);
  }

  async save (data) {
    LOGGER.info('Save patient');
    return Vue.http.post('patients', data);
  }
}
