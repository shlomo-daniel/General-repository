import { useEffect, useState } from "react";
import PageHeader from "../components/common/pageHeader";

function useForm({ initialValues, onSubmit, validate }) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErorrs] = useState(null);

  useEffect(() => {
    const errors = validate(form);
    setErorrs(errors);
  }, [form]);

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);
  };

  return { form, handleChange, handleSubmit, errors };
}

function Form() {
  const { form, handleChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (form) => {
      let errors = {};

      if (form.name.length <= 2) {
        errors.name = "some problem with name";
      }

      return errors;
    },
    onSubmit(form) {
      console.log("submitted", form);
    },
  });

  return (
    <div className="container">
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <PageHeader title="Sign In" description="Sign in with your account" />

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          type="text"
        />
        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          type="text"
        />
        <input
          name="password"
          onChange={handleChange}
          value={form.password}
          type="text"
        />

        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;

// const div = document.createElement("div");

// const fn = (someName) => {
//   console.log(someName);
// };
// div.addEventListener("click", fn);

// // fn({
// //   x: 443,
// //   y: 55,
// // });
