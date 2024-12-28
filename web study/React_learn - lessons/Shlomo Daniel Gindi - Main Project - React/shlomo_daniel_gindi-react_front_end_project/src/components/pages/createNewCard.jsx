import { useFormik } from "formik";
import Joi from "joi";
import Input from "../common/input";
import cardsService from "../../../services/cardsService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateNewCard() {
  const navigate = useNavigate();
  const form = useFormik({
    validateOnChange: true,
    validateOnMount: true,
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      image: {
        url: "",
        alt: "",
      },
      address: {
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
      },
    },
    validate(values) {
      const schema = Joi.object({
        title: Joi.string().min(2).max(255).required().label("title"),
        subtitle: Joi.string().min(2).max(255).required().label("subtitle"),
        description: Joi.string()
          .min(2)
          .max(1024)
          .required()
          .label("description"),

        phone: Joi.string()
          .min(9)
          .max(11)
          .required()
          .regex(RegExp(/^[0-9]+$/))
          .message("only numbers are allowed")
          .label("Phone"),
        email: Joi.string()
          .min(5)
          .max(255)
          .required()
          .email({ tlds: { allow: false } })
          .label("Email"),
        web: Joi.string().min(14).max(255).label("website address"),
        image: Joi.object({
          url: Joi.string().min(14).required().label("Image"),
          alt: Joi.string().min(2).max(256).required().label("Alt"),
        }),
        address: Joi.object({
          state: Joi.string().min(2).max(255).allow("").label("State"),
          country: Joi.string().min(2).max(255).required().label("Country"),
          city: Joi.string().min(2).max(255).required().label("City"),
          street: Joi.string().min(2).max(255).required().label("Street"),
          houseNumber: Joi.number()

            .required()
            .label("House Number"),
          zip: Joi.number().label("Zip Code"),
        }),
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
      console.log(errors);

      return errors;
    },

    async onSubmit(values) {
      try {
        await cardsService.createCard(values);
        toast("card created", {
          type: "success",
        });
        navigate("/pages/myCards.jsx");
      } catch (err) {
        if (err.response?.status === 400) {
          // setServerError(err.response.data);
          toast(`Feild to create card, Error(${err?.response.data})`, {
            type: "error",
          });
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
        <form
          onSubmit={form.handleSubmit}
          className="needs-validation"
          noValidate
        >
          <ul
            className="list-group"
            style={{ width: "500px", minWidth: "280px" }}
          >
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("title")}
                label={"Case Name"}
                type="text"
                required
                value={form.values.title}
                error={form.touched.title && form.errors.title}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("subtitle")}
                label={"Client Name (subtitle)"}
                type="text"
                required
                value={form.values.subtitle}
                error={form.touched.subtitle && form.errors.subtitle}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("email")}
                label={"Officer In Charge (Email)"}
                type="text"
                required
                value={form.values.email}
                error={form.touched.email && form.errors.email}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("phone")}
                label={"Phone Number"}
                type="text"
                required
                value={form.values.phone}
                error={form.touched.phone && form.errors.phone}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("web")}
                label={"Website"}
                type="text"
                value={form.values.web}
                error={form.touched.web && form.errors.web}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("image.url")}
                label={"Image"}
                type="text"
                required
                value={form.values.image.url}
                error={form.touched.image?.url && form.errors.url}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("image.alt")}
                label={"Image Accessibility Text"}
                type="text"
                required
                value={form.values.image.alt}
                error={form.touched.image?.alt && form.errors.alt}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("description")}
                label={"Summary (description)"}
                type="text"
                required
                value={form.values.description}
                error={form.touched.description && form.errors.description}
              />
            </li>
            {/* <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Case Files</div>
                <ul>
                  <li>
                    <a
                      href=""
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      id.img
                    </a>
                    <a href="">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      proof-01.img
                    </a>
                    <a href="">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      contract.pdf
                    </a>
                    <a href="">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            <h3 className="m-3">Address</h3>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.state")}
                label={"State"}
                type="text"
                value={form.values.address?.state}
                error={form.touched.address?.state && form.errors.state}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.country")}
                label={"Country"}
                type="text"
                required
                value={form.values.address?.country}
                error={form.touched.address?.country && form.errors.country}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.city")}
                label={"City"}
                type="text"
                required
                value={form.values.address?.city}
                error={form.touched.address?.city && form.errors.city}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.street")}
                label={"Street"}
                type="text"
                required
                value={form.values.address?.street}
                error={form.touched.address?.street && form.errors.street}
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.houseNumber")}
                label={"HouseNumber"}
                type="number"
                required
                value={form.values.address?.houseNumber}
                error={
                  form.touched.address?.houseNumber && form.errors.houseNumber
                }
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <Input
                {...form.getFieldProps("address.zip")}
                label={"Zip"}
                type="number"
                required
                value={form.values.address?.zip}
                error={form.touched.address?.zip && form.errors.zip}
              />
            </li>
            <button
              type="submit"
              className="btn btn-primary m-2"
              disabled={!form.isValid}
              onClick={form.handleSubmit}
            >
              Create Case
            </button>
          </ul>
        </form>
      </div>
    </main>
  );
}
export default CreateNewCard;
