import validateValues from './validateValues';

describe('ValidateValues helper', () => {
  const constraints = {
    email: {
      type: 'email',
    },
    name: {
      type: 'text',
      required: true,
      minLength: 4,
    },
    nickname: {
      type: 'text',
      required: true,
    },
  };

  it('returns undefined for properly validated fields', () => {
    const result = validateValues(
      { email: 'test@gmail.com', name: 'Test', nickname: 'Coder' },
      constraints
    );

    expect(result).toStrictEqual({
      email: undefined,
      name: undefined,
      nickname: undefined,
    });
  });

  it('checks email validity', () => {
    const result = validateValues({ email: 'test' }, constraints);

    expect(result).toStrictEqual({ email: 'Invalid email address' });
  });

  it('checks for required fields', () => {
    const result = validateValues({ name: '', nickname: '' }, constraints);

    expect(result).toStrictEqual({
      name: 'Value cannot be blank',
      nickname: 'Value cannot be blank',
    });
  });

  it('checks for minLength property', () => {
    const result = validateValues({ name: 'PL' }, constraints);

    expect(result).toStrictEqual({
      name: 'Value should be at least 4 chars long',
    });
  });
});
