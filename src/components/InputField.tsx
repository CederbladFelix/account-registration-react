import type { ReactElement } from "react";

interface InputFieldProps {
  label: string;
}

export const InputField = ({label}: InputFieldProps): ReactElement => {
  return (
    <section className="input-group">
      <input type="text" placeholder={label} className="input-box"></input>
      <label htmlFor={label} className="label">{label}</label>
    </section>
  );
};
