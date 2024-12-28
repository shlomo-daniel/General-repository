import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";

function SignUp() {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate(values) {
      // a model to compare to later
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

      //
      const { error } = schema.validate(values, { abortEarly: false });
      console.dir(error);

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
  });

  return (
    <div className="container">
      <PageHeader
        title="Sign Up"
        description="Open a new account now!!! It is free you cheap monkey!"
      />

      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <Input
          type="text"
          label="Name"
          placeholder="John Doe"
          {...form.getFieldProps("name")}
          required
          error={form.touched.name && form.errors.name}
        />
        <Input
          type="email"
          label="Email"
          placeholder="john@doe.com"
          {...form.getFieldProps("email")}
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          type="password"
          label="Password"
          {...form.getFieldProps("password")}
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
