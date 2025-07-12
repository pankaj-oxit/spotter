export const BASE_URL = "https://api.example.com";

export const ENDPOINTS = {
  login: `${BASE_URL}/login`,
  register: `${BASE_URL}/register`,
  getUser: `${BASE_URL}/user`,
};

export const SKY_SCRAPPER_BASE_URL = 'https://sky-scrapper.p.rapidapi.com/';

export const SKY_SCRAPPER_ENDPOINTS = {
  searchAirport: 'api/v1/flights/searchAirport',
  searchFlights: 'api/v2/flights/searchFlights',
  searchIncomplete: 'api/v2/flights/searchIncomplete',
};

export const serviceDetails = {
  API_KEY: 'abc6a9aa4fmsh5738bcde6a1fdc2p17a40ejsnc07cb8ac6261',
  HOST: 'sky-scrapper.p.rapidapi.com',
};

export const getSkyScrapperHeaders = () => ({
  'x-rapidapi-host': serviceDetails.HOST,
  'x-rapidapi-key': serviceDetails.API_KEY,
});
