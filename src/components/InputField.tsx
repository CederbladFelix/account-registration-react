import { type ReactElement } from "react";

interface InputFieldProps {
  inputId: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  inputId,
  label,
  name,
  value,
  onChange,
}: InputFieldProps): ReactElement => {
  return (
    <section className="input-group">
      <input
        name={name}
        id={inputId}
        type="text"
        placeholder=" "
        value={value}
        onChange={onChange}
        className="input-box"
        required
      />
      <label htmlFor={inputId} className="label">
        {label}
      </label>
    </section>
  );
};
