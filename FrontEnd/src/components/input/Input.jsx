import './Input.module.css';

export default function Input({
  label = 'label',
  placeholder = 'placeholder',
  onChange,
  require = true,
}) {
  return (
    <>
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <div className="input-container">
        <input
          className="input"
          id={label}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}
