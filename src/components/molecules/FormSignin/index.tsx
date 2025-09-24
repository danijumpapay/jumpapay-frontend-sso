import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
// Formik
import { Field, Form, Formik } from "formik";

// Yup
import * as Yup from "yup";

// Components
import Button from "@/components/atoms/Button";
import InputGroup from "@/components/atoms/InputGroup";
import Input from "@/components/atoms/Input";
import Alert from "@/components/atoms/Alert";

// Hooks
import useAuth from "@/hooks/rtk/auth";
// import { useAuth } from "@/plugins/api/auth";

// Plugins
import { useAppDispatch } from "@/plugins/redux/reducers/hooks";
import {
  setAccessToken,
  setRefreshToken,
} from "@/plugins/redux/reducers/userReducer";
import { decryptReturnTo } from "@/utils/decrypt";

const FormSignin: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams()[0];
  const { authLoginWithUser, isLoadingAuthLoginWithUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitLogin = async (formData: AuthLoginWithUserForm) => {
    try {
      // append additional data from query params
      formData.client_id = params.get("client_id") || "";
      const returnTo = params.get("return_to") || "";
      formData.return_to = returnTo.replace(/ /g, '+');
      // process hit login
      const loginResponse = await authLoginWithUser({
        body: formData,
      }).unwrap();
      const results = loginResponse.results;
      // redirect to return_to if exists
      const decryptedReturnTo = decryptReturnTo(formData.return_to);
      if (decryptedReturnTo) {
        window.location.href = decryptedReturnTo;
        return;
      }
      dispatch(setAccessToken(results.token));
      dispatch(setRefreshToken(results.refreshToken));
    } catch (error) {
      if ((error as any)?.data?.message) {
        setErrorMessage((error as any).data.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
      throw new Error(String(error));
    }
  };

  const initialValues = {
    user: "",
    password: "",
    client_id: "",
    return_to: ""
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string().required("Username or Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitLogin}
      >
        {({ errors, touched }) => (
          <Form>
            {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : ""}
            <div className="mt-8 intro-x">
              <InputGroup label="Username">
                <Field
                  as={Input}
                  errorMessage={errors.user}
                  type="text"
                  className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                  placeholder="Username / Email"
                  name="user"
                  disabled={isLoadingAuthLoginWithUser}
                />
                {errors.user && touched.user && errors.user && (
                  <small className="text-red text-small">{` - ${
                    errors.user && touched.user && errors.user
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
                  disabled={isLoadingAuthLoginWithUser}
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
                disabled={isLoadingAuthLoginWithUser}
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
              Atau
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
          >
            <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
              <svg
                stroke="currentColor"
                fill="currentColor"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
      <div className="m-auto mt-6 w-fit md:mt-8">
        <span className="m-auto dark:text-gray-400">
          Belum punya akun?
          <a
            className="font-semibold text-indigo-600 dark:text-indigo-100"
            href="/signup"
          >
            Buat Akun
          </a>
        </span>
      </div>
    </>
  );
};

export default FormSignin;
