import Joi from "joi";
import { useFormik } from "formik";
import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";
import usersService from "../services/usersService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.string().min(2).max(255).required().label("Name"),
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } })
          .label("Email"),
        password: Joi.string().min(6).max(1024).required().label("Password"),
      });

      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        const key = detail.path[0];
        errors[key] = detail.message;
      }
      return errors;
    },
    async onSubmit(values) {
      try {
        await usersService.createUser({ ...values, biz: false });
        navigate("/sign-in");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  return (
    <div className="container">
      <PageHeader
        title="Sign Up"
        description="Open a new account now!!! It is free you cheap monkey!"
      />

      <form onSubmit={form.handleSubmit} noValidate>
        {serverError && <div className="alert alert-danger">{serverError}</div>}

        <Input
          {...form.getFieldProps("name")}
          type="text"
          label="Name"
          placeholder="John Doe"
          required
          error={form.touched.name && form.errors.name}
        />
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          placeholder="john@doe.com"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
