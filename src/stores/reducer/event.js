const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA EVENT
  isLoading: false,
  isError: false,
  message: '',
};
const Event = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_MESSAGE': {
      return {
        ...state,
        message: '',
      };
    }
    case 'GET_EVENT_BY_ID_PENDING': {
      return {
        ...state,
        data: [],
      };
    }
    case 'GET_EVENT_BY_ID_FULFILLED': {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    case 'GET_EVENT_BY_ID_REJECTED': {
      return {
        ...state,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default Event;
