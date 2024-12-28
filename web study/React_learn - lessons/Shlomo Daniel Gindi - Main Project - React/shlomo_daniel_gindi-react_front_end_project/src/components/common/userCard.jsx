import { NavLink, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import Joi from "joi";
import Input from "./input";
import cardsService from "../../../services/cardsService";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth.context";

function UserCard({
  cardObj: {
    title,
    _id,
    user_id,
    subtitle,
    createdAt,
    email,
    description,
    image,
  },
  refreshLike,
  islike,
}) {
  const { user } = useAuth();
  const isOwner = Boolean(user_id === user?._id);

  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const handleUpdateCard = () => {
    try {
      cardsService.updateCard(_id, form.values);
      toast("Updated seccessfuly", { type: "success" });
    } catch (err) {
      toast(`Feild to update. error ${err}`, {
        type: "error",
      });
    }
  };

  const handleLike = () => {
    if (!islike) {
      cardsService.cardLike(_id);
      refreshLike();
      toast("Saved to urgent cases", { type: "success" });
      return;
    }
    cardsService.cardLike(_id);
    refreshLike();
    toast("Card removed", { type: "success" });
  };

  const handleDeleteCard = async () => {
    try {
      await cardsService.deleteCard(_id);
      toast("deleted seccessfuly", { type: "success" });
    } catch (err) {
      toast(`Feild to delete. error ${err}`, {
        type: "error",
      });
    }
  };

  const form = useFormik({
    validateOnChange: true,
    validateOnMount: true,
    initialValues: {
      title: title,
      subtitle: subtitle,
      description: description,
      phone: "050444555",
      email: email,
      web: "www.googliloo.com",
      image: {
        url: image.url,
        alt: image.alt,
      },
      address: {
        state: "new york",
        country: "new jersy",
        city: "new york",
        street: "king street 12",
        houseNumber: "566",
        zip: "6665559",
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
        web: Joi.string().min(14).max(255).label("web address"),
        image: Joi.object({
          url: Joi.string().min(14).label("Image"),
          alt: Joi.string().min(2).max(256).label("Alt"),
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
          zip: Joi.string().min(2).max(255).label("Zip Code"),
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

      return errors;
    },

    async onSubmit(values) {
      try {
        await usersService.updateCard(caseData._id, { ...values });
        toast("card udated", {
          type: "success",
        });
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
          toast("Feild to update card", {
            type: "error",
          });
        }
      }
    },
  });
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Case</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" d-flex justify-content-center align-items-start flex-wrap gap-3 ">
            <img
              src={form.values.image.url}
              alt="court hammer"
              className="img-fluid"
              style={{ maxWidth: "50%", width: "500px", minWidth: "300px" }}
            />
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
                    label={"Case ID"}
                    type="text"
                    readOnly
                    disabled
                    value={_id}
                  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <Input
                    {...form.getFieldProps("subtitle")}
                    label={"Client Name"}
                    type="text"
                    required
                    value={form.values.subtitle}
                    error={form.touched.subtitle && form.errors.subtitle}
                  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <Input
                    label={"Date of Case"}
                    type="text"
                    readOnly
                    disabled
                    value={createdAt}
                  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <Input
                    {...form.getFieldProps("email")}
                    label={"Officer In Charge"}
                    type="text"
                    required
                    value={form.values.email}
                    error={form.touched.email && form.errors.email}
                  />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <Input
                    {...form.getFieldProps("description")}
                    label={"Summary"}
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
              </ul>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!form.isValid}
            onClick={handleUpdateCard}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="card" style={{ width: "18rem", height: "fit-content" }}>
        <NavLink
          to={"/pages/userDetailsCase.jsx"}
          state={{
            title,
            _id,
            subtitle,
            createdAt,
            email,
            description,
            image,
            isOwner,
          }}
        >
          <img src={image.url} className="card-img-top" alt={image.alt} />
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">{form.values.title}</h5>
          <p className="card-text">{form.values.description}</p>
          <div
            className="d-flex justify-content-center"
            style={{ columnGap: "1em" }}
          >
            {isOwner && (
              <>
                <a className="icon-link-hover">
                  <i className="bi bi-vector-pen h4" onClick={handleShow}></i>
                </a>
                <a className="icon-link-hover">
                  <i
                    className="bi bi-file-earmark-excel h4"
                    onClick={handleDeleteCard}
                  ></i>
                </a>
              </>
            )}
            {!islike && (
              <a className="icon-link-hover cursor-pointer">
                <i
                  className="bi bi-exclamation-square h4 "
                  onClick={handleLike}
                ></i>
              </a>
            )}
            {islike && (
              <a className="icon-link-hover cursor-pointer">
                <i
                  className="bi bi-exclamation-square-fill h4"
                  onClick={handleLike}
                ></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserCard;
