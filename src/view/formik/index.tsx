import { useFormik } from "formik";
import styled from "styled-components";
import { Container } from "../../components";

const inputFontSize = "20px";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const FormGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  label {
    width: 35%;
    text-align: right;
  }
  input {
    width: 50%;
    font-size: ${inputFontSize};
    padding-left: 10px;
  }
`;

const SignupForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  button[type="submit"] {
    width: 50%;
    margin: 1em auto;
    font-size: ${inputFontSize};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin: auto;
`;

type PartialValue<T> = {
  [P in keyof T]?: string;
};

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: (values) => {
      const errors: PartialValue<typeof values> = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!EMAIL_REGEX.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <h1>Formik Form Demo</h1>
      <SignupForm onSubmit={formik.handleSubmit}>
        <FormGroup>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
        </FormGroup>
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
        ) : null}
        <FormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps("lastName")}
          />
        </FormGroup>
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
        ) : null}
        <FormGroup>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
        </FormGroup>
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <button type="submit">Submit</button>
      </SignupForm>
    </Container>
  );
};

export default FormikForm;
