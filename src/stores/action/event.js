import axios from '../../utils/axios';

export const getEventById = id => {
  return {
    type: 'GET_EVENT_BY_ID',
    payload: axios.get(`event/${id}`),
  };
};
