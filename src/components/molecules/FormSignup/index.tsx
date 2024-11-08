import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import InputGroup from "@/components/atoms/InputGroup";
import Input from "@/components/atoms/Input";
import Alert from "@/components/atoms/Alert";

// Formik
import { Field, Form, Formik } from "formik";

// Yup
import * as Yup from "yup";

// Hooks
import useAuth from "@/hooks/rtk/auth";

// Plugins
// import { useAppDispatch } from "@/plugins/redux/reducers/hooks";
const FormSignup: React.FC = () => {
  const { signupWithUser, isLoadingSignupWithUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (formData: SignupWithUser) => {
    try {
      const signupResponse = await signupWithUser({
        body: formData,
      }).unwrap();
      const results = signupResponse.results;
      console.log(results);
    } catch (error) {
      if ((error as any)?.data?.message) {
        setErrorMessage((error as any).data.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
      throw new Error(String(error));
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : ""}
            <div className="mt-8 intro-x">
              <InputGroup label="Name">
                <Field
                  as={Input}
                  errorMessage={errors.name}
                  type="text"
                  className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                  placeholder="Name"
                  name="name"
                  disabled={isLoadingSignupWithUser}
                />
                {errors.name && touched.name && errors.name && (
                  <small className="text-red text-small">{` - ${
                    errors.name && touched.name && errors.name
                  }`}</small>
                )}
              </InputGroup>
              <InputGroup label="Email">
                <Field
                  as={Input}
                  errorMessage={errors.email}
                  type="email"
                  className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                  placeholder="Email"
                  name="email"
                  disabled={isLoadingSignupWithUser}
                />
                {errors.email && touched.email && errors.email && (
                  <small className="text-red text-small">{` - ${
                    errors.email && touched.email && errors.email
                  }`}</small>
                )}
              </InputGroup>
              <InputGroup label="Password">
                <Field
                  as={Input}
                  errorMessage={errors.password}
                  type="password"
                  className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                  placeholder="Password"
                  name="password"
                  disabled={isLoadingSignupWithUser}
                />
                {errors.password && touched.password && errors.password && (
                  <small className="text-red text-small">{` - ${
                    errors.password && touched.password && errors.password
                  }`}</small>
                )}
              </InputGroup>
            </div>
            <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                type="submit"
                variant="primary"
                className="w-full px-4 py-3 align-top xl:mr-3 mb-4"
                disabled={isLoadingSignupWithUser}
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="m-auto mt-6 w-fit md:mt-8">
        <span className="m-auto dark:text-gray-400">
          Sudah punya akun?
          <a
            className="font-semibold ml-1 text-indigo-600 dark:text-indigo-100"
            href="/signin"
          >
            Masuk di sini
          </a>
        </span>
      </div>
    </>
  );
};

export default FormSignup;
