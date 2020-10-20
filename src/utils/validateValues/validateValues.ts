import {
  FormStructure,
  Value,
  Structure,
} from 'utils/formStoreStructure/formStoreStructure';

type Constraint = Pick<Structure, 'type' | 'required' | 'minLength'>;

export default (
  fields: FormStructure['values'],
  constraints: { [key: string]: Constraint }
) =>
  Object.keys(fields).reduce<Record<string, string>>((acc, curr) => {
    // @ts-ignore
    acc[curr] = validateValue(fields[curr], constraints[curr]);

    return acc;
  }, {});

const validateValue = (value: Value, constraint: Constraint) => {
  const { required, type, minLength } = constraint;

  if (required && !value) {
    return 'Value cannot be blank';
  }

  if (type === 'email') {
    const validEmail = value
      .toString()
      .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!validEmail) {
      return 'Invalid email address';
    }
  }

  if (minLength && value.toString().length < minLength) {
    return `Value should be at least ${minLength} chars long`;
  }
};
