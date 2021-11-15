import axios from 'axios';

// Actions
const GET_COUNTRY = 'covid_19_stats/home/GET_COUNTRY';
const CLEAR_COUNTRY = 'covid_19_stats/home/CLEAR_COUNTRY';
const FILTER_REGION = 'covid_19_stats/home/FILTER_REGION';

const initialState = [];

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
export const loadMisionsThunk = () => (
  async (dispatch) => {
    const req = await axios
      .get('https://api.spacexdata.com/v3/missions?limit=10')
      .then((response) => {
        const data = response.data.map((item) => ({
          name: item.mission_name,
          id: item.mission_id,
          description: item.description,
          join: false,
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
