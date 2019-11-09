import { fields } from '../sampleForm.json';

export default () => {
  const structure = {};
  const values = {};

  fields.forEach(field => (structure[field.name] = { ...field }));
  fields.forEach(
    field => (values[field.name] = structure[field.name].value || '')
  );

  return {
    structure,
    values,
  };
};