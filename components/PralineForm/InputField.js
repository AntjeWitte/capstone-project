export default function InputField({ id, label, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>
        {`${label}: `}
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </>
  );
}
