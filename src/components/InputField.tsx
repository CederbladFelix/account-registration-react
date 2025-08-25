import type { ReactElement } from "react";

interface InputFieldProps {
  label: string;
}

export const InputField = ({label}: InputFieldProps): ReactElement => {
  return (
    <section className="input-group">
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder="" className="input-box"></input>
    </section>
  );
};
