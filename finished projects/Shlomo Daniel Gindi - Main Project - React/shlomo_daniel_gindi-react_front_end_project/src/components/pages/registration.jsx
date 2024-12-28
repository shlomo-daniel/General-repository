import { useFormik } from "formik";
import Joi from "joi";
import Input from "../common/input";
import usersService from "../../../services/usersService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnChange: true,
    validateOnMount: true,
    initialValues: {
      name: {
        first: "",
        middle: "",
        last: "",
      },
      phone: "",
      email: "",
      image: {
        url: "https://images.app.goo.gl/UEyakTgfooXZg7mw5",
        alt: "falcom",
      },
      address: {
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
      },
      password: "",
      isBusiness: false,
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.object({
          first: Joi.string().min(2).max(30).required().label("First name"),
          middle: Joi.string().min(2).max(30).allow("").label("Middle Name"),
          last: Joi.string().min(2).max(30).required().label("Last Name"),
        }),
        phone: Joi.string()
          .min(9)
          .max(11)
          .required()
          .regex(RegExp(/^[0-9]+$/))
          .message("only numbers are allowed")
          .label("Phone"),
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } })
          .label("Email"),
        image: Joi.object({
          url: Joi.string().min(14).label("Image"),
          alt: Joi.string().min(2).max(100).label("Alt"),
        }),
        address: Joi.object({
          state: Joi.string().min(2).max(255).allow("").label("State"),
          country: Joi.string().min(2).max(255).required().label("Country"),
          city: Joi.string().min(2).max(255).required().label("City"),
          street: Joi.string().min(2).max(255).required().label("Street"),
          houseNumber: Joi.string()
            .min(2)
            .max(255)
            .required()
            .label("House Number"),
          zip: Joi.string().min(2).max(255).required().label("Zip Code"),
        }),
        password: Joi.string().min(7).max(20).required().label("Password"),
        isBusiness: Joi.boolean(),
      });

      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        const key = detail.path[1] || detail.path[0];
        errors[key] = detail.message;
      }

      return errors;
    },
    async onSubmit(values) {
      try {
        await usersService.createUser({ ...values });
        navigate("/pages/logIn.jsx");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
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
            {...form.getFieldProps("name.first")}
            type="text"
            label="First Name"
            required
            placeholder="first name"
            error={form.touched.name?.first && form.errors.first}
          />
          <Input
            {...form.getFieldProps("name.middle")}
            type="text"
            label="Middle Name"
            placeholder="middle name"
            error={form.touched.name?.middle && form.errors.middle}
          />
          <Input
            {...form.getFieldProps("name.last")}
            type="text"
            label="Last Name"
            required
            placeholder="last name"
            error={form.touched.name?.last && form.errors.last}
          />
          <Input
            {...form.getFieldProps("phone")}
            type="tel"
            label="Phone Number"
            required
            placeholder="your number"
            error={form.touched.phone && form.errors.phone}
          />
          <Input
            {...form.getFieldProps("address.state")}
            type="text"
            label="State"
            placeholder="state"
            error={form.touched.address?.state && form.errors.state}
          />
          <Input
            {...form.getFieldProps("address.country")}
            type="text"
            label="Country"
            required
            placeholder="country"
            error={form.touched.address?.country && form.errors.country}
          />
          <Input
            {...form.getFieldProps("address.city")}
            type="text"
            label="City"
            required
            placeholder="city"
            error={form.touched.address?.city && form.errors.city}
          />
          <Input
            {...form.getFieldProps("address.street")}
            type="text"
            label="Street"
            required
            placeholder="street"
            error={form.touched.address?.street && form.errors.street}
          />
          <Input
            {...form.getFieldProps("address.houseNumber")}
            type="text"
            label="house Number"
            required
            placeholder="house number"
            error={form.touched.address?.houseNumber && form.errors.houseNumber}
          />
          <Input
            {...form.getFieldProps("address.zip")}
            type="text"
            label="Zip Code"
            required
            placeholder="zip code"
            error={form.touched.address?.zip && form.errors.zip}
          />
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
          <div className="mb-3 form-check">
            <input
              {...form.getFieldProps("isBusiness")}
              type="checkbox"
              className="form-check-input"
              id="password"
              required
              defaultChecked={form.values.isBusiness}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Are you a business?
            </label>
          </div>
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
      </div>
    </main>
  );
}
export default Registration;
