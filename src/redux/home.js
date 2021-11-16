import axios from 'axios';

// Actions
const GET_COUNTRY = 'covid_19_stats/home/GET_COUNTRY';
const CLEAR_COUNTRY = 'covid_19_stats/home/CLEAR_COUNTRY';
const FILTER_REGION = 'covid_19_stats/home/FILTER_REGION';

const initialState = [];
// const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-03-10/country';

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
    case GET_COUNTRY:
      return [...state, ...action.payload];

    case CLEAR_COUNTRY:
      return state.map((mission) => (mission.id !== action.id ? mission
        : { ...mission, join: !mission.join }));

    default:
      return state;
  }
};

// Thunks
export const loadCountryThunk = () => (
  async (dispatch) => {
    const req = await axios
      .get('https://api.covid19tracking.narrativa.com/api/2020-03-10/country')
      .then((response) => {
        const data = response.data.map((item) => ({
          name: item.name,
          id: item.id,
          regions: item.regions,
          cases: item.today_confirmed,
          death: item.today_deaths,
        }));
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
