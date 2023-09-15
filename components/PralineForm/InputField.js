import { StyledInputField, StyledInputLabel } from "./InputField.styled";

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
    <StyledInputLabel htmlFor={id}>
      {`${label}: `}
      <StyledInputField
        type={type}
        id={id}
        name={id}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-testid={id}
        required
      />
    </StyledInputLabel>
  );
}
