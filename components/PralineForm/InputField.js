export default function InputField({
  type,
  id,
  label,
  value,
  onChange,
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
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}
