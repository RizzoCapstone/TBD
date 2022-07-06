import axios from 'axios';

const GET_ALL_SYSTEMS = 'GET_ALL_SYSTEMS';

const gotAllSystems = (systems) => ({
  type: GET_ALL_SYSTEMS,
  systems,
});

export const getaAllSystems = () => {
  return async (dispatch) => {
    try {
      console.log('inredux');
      const { data } = await axios.get('/api/systems/');
      console.log('after call')
      console.log(data);
      dispatch(gotAllSystems(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];
export default function allSystemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SYSTEMS:
      return action.systems;
    default:
      return state;
  }
}
