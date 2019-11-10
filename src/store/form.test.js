import reducer, { TYPES, updateField, clearValues } from './form';

describe('Form reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it(`handles ${TYPES.updateForm} correctly`, () => {
    const payload = { name: 'Maciek' };
    const actual = reducer(undefined, updateField(payload));

    expect(actual).toMatchSnapshot();
  });


  it(`handles ${TYPES.resetForm} correctly`, () => {
    const actual = reducer(undefined, clearValues());

    expect(actual).toMatchSnapshot();
  });
});
