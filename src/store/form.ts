import formStoreStructure from '../utils/formStoreStructure/index';

type Payload = object;

interface UpdateAction {
  type: typeof TYPES.updateForm;
  payload: Payload;
}

interface ResetAction {
  type: typeof TYPES.resetForm;
  payload?: Payload;
}

const TYPES = {
  updateForm: 'UPDATE_FORM',
  resetForm: 'RESET_FORM',
};

type Action = UpdateAction | ResetAction;

export const initialState = {
  ...formStoreStructure(),
};

const reducer = (state = initialState, action: Partial<Action>) => {
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

export const updateField = (payload: Payload) => ({
  type: TYPES.updateForm,
  payload,
});

export const clearValues = () => ({
  type: TYPES.resetForm,
});

export default reducer;

export type Store = typeof reducer;
export type RootState = typeof initialState;
