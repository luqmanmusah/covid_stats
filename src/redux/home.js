import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Countries from './countries';
import '../App.css';

// Actions
const GET_COUNTRY = 'covid_19_stats/home/GET_COUNTRY';
const CLEAR_COUNTRY = 'covid_19_stats/home/CLEAR_COUNTRY';
const FILTER_REGION = 'covid_19_stats/home/FILTER_REGION';

const initialState = {
  covid_data: [],
};

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-10-10/country';

// Action Creators
const getCountry = (payload) => (
  {
    type: GET_COUNTRY,
    payload,
  }
);

const clearCountry = (id) => (
  {
    type: CLEAR_COUNTRY,
    id,
  }
);

const filterRegion = (id) => (
  {
    type: FILTER_REGION,
    id,
  }
);

// Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state, covid_data: action.payload };
    default:
      return state;
  }
};

export const loadCountryDetail = () => {
  const request = Countries.map(async (country) => {
    const data = await axios
      .get(`${baseUrl}/${country.name}`);
    const { '2020-10-10': dates } = data.data.dates;
    const openData = Object.entries(dates.countries).map((object) => object[1]);
    const outgoingData = {
      id: uuidv4(),
      data: openData,
      country: country.name,
      region: country.region,
      imgUrl: country.img,

    };
    return outgoingData;
  });
  // console.log(request);
  return Promise.all(request);
};

export {
  getCountry,
  filterRegion,
  clearCountry,
  homeReducer,
};
