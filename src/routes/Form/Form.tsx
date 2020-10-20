import { navigate, RouteComponentProps } from '@reach/router';
import React, {
  FunctionComponent,
  useCallback,
  useState,
  FormEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/Button';
import FormField from 'components/FormField/FormField';
import Json from 'components/Json/Json';
import { updateField, RootState } from 'store/form';
import validateValues from 'utils/validateValues/validateValues';
import './style.scss';

const Form: FunctionComponent<RouteComponentProps> = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { values, structure } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (name, value) => {
      dispatch(
        updateField({
          [name]: value,
        })
      );
    },
    [dispatch]
  );

  const validate = useCallback(
    (name, value) => {
      setErrors(prevErrors => ({
        ...prevErrors,
        ...validateValues({ [name]: value }, structure),
      }));
    },
    [structure]
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const submitErrors = validateValues(values, structure);
    const errorsCount = Object.values(submitErrors).filter(err => err && err);

    errorsCount.length ? setErrors(submitErrors) : navigate('/results');
  };

  return (
    <div className="Form">
      <form onSubmit={submit} noValidate className="Form__container">
        {Object.values(structure).map(field => (
          <FormField
            key={field.name}
            error={errors[field.name]}
            onChange={onChange}
            onBlur={validate}
            {...(field.dependant && {
              dependantValue: values[field.dependant],
            })}
            {...field}
            value={values[field.name]}
          />
        ))}
        <Button type="submit">submit</Button>
      </form>

      <Json value={values} className="Form__results" />
    </div>
  );
};

export default Form;
