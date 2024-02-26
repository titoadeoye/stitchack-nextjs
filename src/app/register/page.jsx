"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import { Wrapper, Form, Text, Button, Row } from "./Register.style";
import { CustomInput, Loader } from "@/components";
import Link from "next/link";

export default function Register() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    iAgree: false
  };

  const loading = false;

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Please enter your first name"),
    lastname: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "Your password isn't strong enough"
      ),
    iAgree: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "You need to agree with our T&Cs")
  });


  return (
    <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            handleChange
          }) => (
            <Form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <CustomInput
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                placeholder="First name"
                onBlur={handleBlur}
                error={errors.firstname}
                touched={touched.firstname}
              />
              <CustomInput
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                onBlur={handleBlur}
                error={errors.lastname}
                touched={touched.lastname}
              />
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
              {touched.password && errors.password ? (
                <Row>
                  <p>Passwords must have: </p>
                  <p className="purple">
                    8 characters, one digit and one symbol.
                  </p>
                </Row>
              ) : null}

              <CustomInput
                name="iAgree"
                checked={values.iAgree}
                onChange={handleChange}
                type="checkbox"
                span={
                  <>
                    I agree with{" "}
                    <Link href="/privacyPolicy" target="_blank">
                      privacy
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacyPolicy" target="_blank">
                      policy
                    </Link>
                  </>
                }
                onBlur={handleBlur}
                error={errors.iAgree}
                touched={touched.iAgree}
                className="policy"
              />
              <Button type="submit" disabled={loading}>
                {loading ? <Loader /> : "Sign up"}
              </Button>

              <Text>
                Already have an account?
                <Link href="/signin"> Sign in</Link>
              </Text>
            </Form>
          )}
        </Formik>
    </Wrapper>
  );
}
