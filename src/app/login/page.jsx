"use client";

import { CustomInput, Loader } from "@/components";
import { useState } from "react";
import Link from "next/link";
// import { fireSwalError, setToStorage } from "@/constants";
// import { useUserContext } from '../context/UserContext';
import * as Yup from "yup";
import { Formik } from "formik";
import { Wrapper, Form, Text, Button, Row } from "./Login.style";

export default function Login() {
  const [error, setError] = useState("");
  // const { setUser, setIsLoggedIn } = useUserContext();

  const initialValues = {
    email: "",
    password: "",
    remember: false
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password")
  });

  const loading = false;

  // const { isLoading: loading, mutate } = useMutation(logIn, {
  // 	onSuccess: (data) => {
  // 		setError('');
  // 		setToStorage("token", data.token);
  // 		setIsLoggedIn(data.token);
  // 		setToStorage("user", data.user);
  // 		setUser(data.user);
  //         navigate("/app")
  // 	},
  // 	onError: (error) => {
  // 		console.log(error);
  //         error.message ? setError(error.message) : setError("Username/password is incorrect")
  //         fireSwalError(error.message);
  // 		},
  // });

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //   const { password, ...others } = values;
          //   const data = { ...others, secret: password };
          console.log(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched
        }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Sign in</h3>

            <CustomInput
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
            <CustomInput
              name="password"
              value={values.password}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Password"
              type="password"
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />

            {error && <Error>{error}</Error>}
            <Row>
              <CustomInput
                name="remember"
                checked={values.remember}
                onChange={handleChange}
                type="checkbox"
                span={"Remember me"}
              />
            </Row>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader /> : "Sign in"}
            </Button>

            <Text>
              Don't have an account?
              <Link href="/register"> Sign up</Link>
            </Text>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}
