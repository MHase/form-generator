import reducer, { updateField, clearValues, initialState } from './form';

describe('Form reducer', () => {
  const state = {
    values: {
      name: '',
    },
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handles UPDATE_FORM correctly`, () => {
    const payload = { name: 'Maciek', nickname: 'Coder' };
    const actual = reducer(state, updateField(payload));

    expect(actual).toEqual({
      values: {
        name: 'Maciek',
        nickname: 'Coder'
      }
    });
  });

  it(`handles RESET_FORM correctly`, () => {
    const actual = reducer(state, clearValues());

    expect(actual).toEqual(initialState);
  });
});
