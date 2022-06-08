import Form from "react-bootstrap/Form";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const MyInputMask = ({
  control,
  validation,
  placeholder,
  mask,
  defaultValue,
  name,
  label,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field, formState: { errors } }) => (
        <Form.Group className="mb-3" controlId={field.name}>
          <Form.Label>{label}</Form.Label>
          <InputMask {...field} mask={mask}>
            {() => <Form.Control type={type} placeholder={placeholder} />}
          </InputMask>
          <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => {
              return <Form.Text className="text-danger">{message}</Form.Text>;
            }}
          />
        </Form.Group>
      )}
    />
  );
};
export default MyInputMask;
