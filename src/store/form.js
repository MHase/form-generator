export const TYPES = {
  updateForm: 'UPDATE_FORM',
  createStructure: 'CREATE_STRUCTURE',
};

const initialState = {
  values: {},
  structure: {},
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
    case TYPES.createStructure:
      return {
        ...state,
        structure: action.payload.structure,
        values: action.payload.values,
      };
    default:
      return state;
  }
};

export const updateField = payload => ({
  type: TYPES.updateForm,
  payload,
});

export const createStructure = payload => {
  const structure = {};
  const values = {};
  payload.forEach(field => (structure[field.name] = { ...field }));
  payload.forEach(
    field => (values[field.name] = structure[field.name].value || '')
  );

  return {
    type: TYPES.createStructure,
    payload: {
      structure,
      values,
    },
  };
};

export default reducer;
