import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import Joi from "joi";
import { useFormik } from "formik";
import usersService from "../../services/UsersService";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate(values) {
      const schema = Joi.object({
        email: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(100).required(),
      });

      const { error } = schema.validate(values, { abortEarly: false });

      const errors = {};

      for (const detail of error.details) {
        const key = detail.path;
        errors[key] = detail.message;
      }
      console.log(errors);

      return errors;
    },
  });

  return (
    <div className="row g-3 m-3">
      <PageHeader title="Sign In" description="Please sign in here" />
      <Input
        label={"Email"}
        type={"email"}
        name={"email"}
        error={formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      <form onSubmit={formik.handleSubmit}>
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          error={formik.errors.password}
          {...formik.getFieldProps("password")}
        />
        <button
          className="btn btn-success mt-3"
          type="submit"
          // onSubmit={usersService.createUser(values)}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
export default SignIn;
