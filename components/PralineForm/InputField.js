export default function InputField({
  type,
  id,
  label,
  value,
  onChange,
  min,
  max,
  placeholder,
  step,
}) {
  return (
    <label htmlFor={id}>
      {`${label}: `}
      <input
        type={type}
        id={id}
        name={id}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}
