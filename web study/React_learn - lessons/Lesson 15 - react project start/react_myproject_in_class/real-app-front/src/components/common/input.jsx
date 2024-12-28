function Input({ label, type, name, value, ...rest }) {
  return (
    <div className="row">
      {label && (
        <label htmlFor={label} className="form-label">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        id={label}
        value={value}
        className="form-control"
        {...rest}
      />
      {rest.error && <div className="text-danger">{rest.error}</div>}
    </div>
  );
}
export default Input;
