import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getVallidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
