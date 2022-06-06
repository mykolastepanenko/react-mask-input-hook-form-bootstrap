import Form from "react-bootstrap/Form";
import { ErrorMessage } from "@hookform/error-message";

const RegisterInput = ({
  label,
  type,
  placeholder,
  name,
  validation,
  errors,
  register,
}) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => {
          return <Form.Text className="text-danger">{message}</Form.Text>;
        }}
      />
    </Form.Group>
  );
};
export default RegisterInput;
