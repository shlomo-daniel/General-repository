function Input({ label, type, name, value, handleInput, error, ...rest }) {
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
        onInput={handleInput}
        className="form-control "
        {...rest}
      />
    </div>
  );
}
export default Input;
