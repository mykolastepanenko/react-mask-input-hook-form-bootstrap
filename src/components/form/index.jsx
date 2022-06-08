import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import validation from "./validation";
import MyInputMask from "./MyInputMask";
import RegisterInput from "./RegisterInput";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    data.phone_mask = data.phone_mask.replace(/\s+/g, ""); //удаляет пробелы внутри строки
    console.log(data);
    reset();
  };

  return (
    <Container>
      <h1>Mask input</h1>
      <Form className="bg-light p-4" onSubmit={handleSubmit(onSubmit)}>
        <RegisterInput
          label="Username"
          type="text"
          placeholder="Enter username"
          name="username"
          errors={errors}
          register={register}
          validation={validation.username}
        />
        <RegisterInput
          label="Email address"
          type="email"
          placeholder="Enter email"
          name="email"
          errors={errors}
          register={register}
          validation={validation.email}
        />

        <MyInputMask
          placeholder="Enter phone number"
          mask="+380 99 99 99 999"
          control={control}
          validation={validation.phone}
          defaultValue=""
          name="phone_mask"
          label="Phone"
          type="tel"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default MyForm;
