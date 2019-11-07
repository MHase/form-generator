import reducer, { TYPES, updateField, createStructure } from './form';

const initState = {
  values: {},
  structure: {},
};

const sampleFormStructure = [
  {
    name: 'Name',
    required: true,
    type: 'text',
  },
  {
    name: 'Nickname',
    value: 'Coder',
    required: true,
    type: 'text',
  },
  {
    name: 'Field',
    type: 'select',
    required: true,
    options: [
      { label: 'IT', value: 'it' },
      { label: 'Product', value: 'product' },
      { label: 'Content', value: 'content' },
    ],
  },
];

describe('Form reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it(`handles ${TYPES.updateForm} correctly`, () => {
    const payload = { name: 'Maciek' };

    const actual = reducer(initState, updateField(payload));

    expect(actual).toEqual({
      values: { name: 'Maciek' },
      structure: {},
    });
  });

  it(`handles ${TYPES.createStructure} correctly`, () => {
    const payload = sampleFormStructure;

    const actual = reducer(initState, createStructure(payload));

    expect(actual).toEqual({
      structure: {
        Name: {
          name: 'Name',
          required: true,
          type: 'text',
        },
        Nickname: {
          name: 'Nickname',
          value: 'Coder',
          required: true,
          type: 'text',
        },
        Field: {
          name: 'Field',
          type: 'select',
          required: true,
          options: [
            { label: 'IT', value: 'it' },
            { label: 'Product', value: 'product' },
            { label: 'Content', value: 'content' },
          ],
        },
      },
      values: {
        Name: '',
        Nickname: 'Coder',
        Field: '',
      },
    });
  });
});
