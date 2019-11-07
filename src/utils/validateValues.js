export default (fields, constraints) => {
  const errors = {};
  Object.keys(fields).forEach(key => {
    errors[key] = validateValue(fields[key], constraints[key]);
  });
  return errors;
};

const validateValue = (value, constraint) => {
  const { required, type, minLength } = constraint;

  if (required && !value) {
    return 'Value cannot be blank';
  }

  if (type === 'email') {
    const validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!validEmail) {
      return 'Invalid email address';
    }
  }

  if (minLength && value.length < minLength) {
    return `Value should be at least ${minLength} chars long`;
  }
};
