import { useFormik } from "formik";
import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";
import Joi from "joi";
import usersService from "../../services/UsersService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [serverError, setServerError] = useState();
  const navigate = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      name: "",
      // lastName: "",
      email: "",
      password: "",
    },
    // formik, conditions and error messages
    validate(values) {
      const schemaOfconditions = Joi.object({
        name: Joi.string().min(2).max(15).required().label("Name"),
        // lastName: Joi.string().min(2).max(15).required().label("last Name"),
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } })
          .label("Email"),
        password: Joi.string().min(2).max(90).required().label("password"),
      });
      // compare vlaues to conditions
      const { error } = schemaOfconditions.validate(values, {
        abortEarly: false,
      });
      if (!error) {
        return null;
      }

      let errors = {};

      for (const detail of error.details) {
        const key = detail.path[0];
        errors[key] = detail.message;
      }

      return errors;
    },
    async onSubmit(values) {
      try {
        await usersService.createUser({ ...values, biz: false });
        navigate("/signIn");
      } catch (error) {
        if (error.response?.status === 400) {
          setServerError(error.response.data);
        }
      }
    },
  });

  return (
    <div className="row g-3 m-3">
      <PageHeader title="Sign Up" description="sign up to get the best deals" />
      <form onSubmit={formik.handleSubmit} noValidate>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        <Input
          label="First Name"
          type="text"
          name="name"
          error={formik.errors.name}
          {...formik.getFieldProps("name")}
        />

        {/* <Input
          label="Last Name"
          type="text"
          name="lastName"
          error={formik.errors.lastName}
          {...formik.getFieldProps("lastName")}
        /> */}

        <Input
          label="Email"
          type="email"
          name="email"
          error={formik.errors.email}
          {...formik.getFieldProps("email")}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          error={formik.errors.password}
          {...formik.getFieldProps("password")}
        />
        <button
          className="btn btn-success mt-3"
          type="submit"
          disabled={!formik.isValid}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
