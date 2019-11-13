import formStoreStructure from './';

describe('FormStoreStructure helper', () => {
  const fields = [
    {
      name: 'Name',
      type: 'text',
      minLength: 4,
      required: true,
    },
    { name: 'Nickname', type: 'text' },
    { name: 'Email', type: 'email', required: true },
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

  it('returns proper output', () => {
    const result = formStoreStructure(fields);

    expect(result).toEqual({
      structure: {
        Name: { name: 'Name', type: 'text', minLength: 4, required: true },
        Nickname: { name: 'Nickname', type: 'text' },
        Email: { name: 'Email', type: 'email', required: true },
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
      values: { Name: '', Nickname: '', Email: '', Field: '' },
    });
  });
});
