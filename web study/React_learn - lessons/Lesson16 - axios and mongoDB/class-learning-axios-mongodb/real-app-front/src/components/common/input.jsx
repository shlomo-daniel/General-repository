function Input({ label, error, ...rest }) {
  return (
    <div className="mb-3">
      <label htmlFor={rest.name} className="form-label">
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        {...rest}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
        id={rest.name}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

export default Input;

// classNames("form-control", {
//   "is-invalid": error,
// });
// https://www.npmjs.com/package/classnames
