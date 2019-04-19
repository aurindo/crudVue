import Vue from 'vue';
import Logger from '../logger';

const LOGGER = Logger('services/patient.js');

export default class PatientService {
  constructor (apiUrl) {
    Vue.http.options.root = apiUrl;
  }

  async getAll () {
    LOGGER.info('Getting all patients');
    const all = Vue.http.get('patients');
    return all;
  }

  async delete (id) {
    LOGGER.info('Deleting patient');
    return Vue.http.delete(`patients/${id}`);
  }

  async save (data) {
    LOGGER.info('Save patient');
    const all = Vue.http.post('patients', data);
    return all;
  }
}
