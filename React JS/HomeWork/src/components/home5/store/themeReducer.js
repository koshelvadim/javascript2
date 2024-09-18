const TOGGLE = 'TOGGLE';

export const toggle = () => ({type: TOGGLE});

const initialState = {
  theme: 'light',
}

export const themeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "TOGGLE" : 
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    default:
      return state;
  }
};