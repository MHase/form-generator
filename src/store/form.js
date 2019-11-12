import formStoreStructure from '../utils/formStoreStructure';

const TYPES = {
  updateForm: 'UPDATE_FORM',
  resetForm: 'RESET_FORM',
};

export const initialState = {
  ...formStoreStructure(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.updateForm:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    case TYPES.resetForm:
      return initialState;
    default:
      return state;
  }
};

export const updateField = payload => ({
  type: TYPES.updateForm,
  payload,
});

export const clearValues = () => ({
  type: TYPES.resetForm,
});
  
export default reducer;