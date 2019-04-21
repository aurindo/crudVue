'use strict'

const PROTOCOL = `${process.env.PROTOCOL || 'http'}`;
const HOST = `${process.env.HOST || 'localhost'}`;
const PORT = `${process.env.PORT || '8080'}`;
const API_PATH = `${process.env.API_PATH || '/'}`;

module.exports = {
  BASE_URL: `'${PROTOCOL}://${HOST}:${PORT}'`,
  API_PATH: `'${API_PATH}'`,
}
