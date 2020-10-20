import { fields } from '../../sampleForm.json';

export interface Option {
  label: string;
  value: string;
}

export type SelectOptions = Option[] | { [key: string]: Option[] };

export type Value = string | number;

export interface Structure {
  name: string;
  type: string;
  minLength?: number;
  value?: Value;
  required?: boolean;
  options?: SelectOptions;
  dependant?: string;
}

export interface FormStructure {
  structure: { [key: string]: Structure };
  values: { [key: string]: Value };
}

export default (data = fields) =>
  data.reduce<FormStructure>(
    (acc, curr: any) => {
      acc.structure[curr.name] = curr;
      acc.values[curr.name] = curr.value || '';

      return acc;
    },
    {
      structure: {},
      values: {},
    }
  );
