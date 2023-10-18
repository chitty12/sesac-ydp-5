const initialState = {
  number: 0,
};

const depositReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'DEPOSIT':
      return { number: state.number + action.data };
    case 'WITHDRAW':
      return { number: state.number - action.data };
    default:
      return state;
  }
};

export default depositReducer;
