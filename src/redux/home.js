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
      return [...state, action.payload];

      // case CLEAR_COUNTRY:
      //   return state.map((mission) => (mission.id !== action.id ? mission
      //     : { ...mission, join: !mission.join }));

    case FILTER_REGION: {
      const country = state.filter((countryDetail) => countryDetail.id === action.id);
      return [country[0]];
    }
    default:
      return state;
  }
};

export const loadCountryDetail = (country) => (
  async (dispatch) => {
    const req = await axios
      .get(`${baseUrl}/${country.name}`)
      .then((response) => {
        // console.log(response.data.total);
        const data = {
          name: response.data.total.name,
          id: response.data.total.id,
          regions: response.data.total.regions,
          cases: response.data.total.today_confirmed,
          death: response.data.total.today_deaths,
        };
        return data;
      });
    dispatch(getCountry(req));
  }
);

export {
  getCountry,
  filterRegion,
  clearCountry,
  homeReducer,
};
