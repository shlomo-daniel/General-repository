import { useFormik } from "formik";
import Joi from "joi";
import Input from "../common/input";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

function LogIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const form = useFormik({
    validateOnChange: true,
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate(values) {
      const schema = Joi.object({
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } })
          .label("Email"),
        password: Joi.string().min(7).max(20).required().label("Password"),
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
      const result = await login(values);

      if (result !== "error") {
        navigate("/pages/myCards.jsx");
      } else if (result === "error") {
        return;
      }
    },
  });

  return (
    <main
      className="container-fluid  flex-fill p-3"
      style={{
        background: "#ffebe1",
        minHeight: "fit-content",
      }}
    >
      <div className=" d-flex justify-content-center align-items-start flex-wrap gap-3 ">
        <form onSubmit={form.handleSubmit} noValidate>
          <Input
            {...form.getFieldProps("email")}
            type="email"
            label="Email Address"
            required
            placeholder="email"
            error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            placeholder="password"
            error={form.touched.password && form.errors.password}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!form.isValid}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
export default LogIn;
