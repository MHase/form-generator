import { fields } from '../../sampleForm.json';

export default (data = fields) => {
  const structure = {};
  const values = {};

  data.forEach(field => (structure[field.name] = { ...field }));
  data.forEach(
    field => (values[field.name] = structure[field.name].value || '')
  );

  return {
    structure,
    values,
  };
};
