import axios from 'axios';
// import Countries from './countries';

// Actions
const GET_COUNTRY = 'covid_19_stats/home/GET_COUNTRY';
const CLEAR_COUNTRY = 'covid_19_stats/home/CLEAR_COUNTRY';
const FILTER_REGION = 'covid_19_stats/home/FILTER_REGION';

const initialState = [];
const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-03-10/country';

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

const filterRegion = (payload) => (
  {
    type: FILTER_REGION,
    payload,
  }
);

// Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY.name:
      return [...state, ...action.payload];

      // case CLEAR_COUNTRY:
      //   return state.map((mission) => (mission.id !== action.id ? mission
      //     : { ...mission, join: !mission.join }));

    default:
      return state;
  }
};

export const loadCountryDetail = (country) => (
  async (dispatch) => {
    const req = await axios
      .get(`${baseUrl}/${country}`)
      .then((response) => {
        const data = response.data.map((country) => ({
          name: country.name,
          id: country.id,
          regions: country.regions,
          cases: country.today_confirmed,
          death: country.today_deaths,
        }));
        return data;
      });
    dispatch(getCountry(req));
    console.log(req, 'data');
  }
);

export {
  getCountry,
  filterRegion,
  clearCountry,
  homeReducer,
};
