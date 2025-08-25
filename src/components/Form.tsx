import type { ReactElement } from "react";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";

export const Form = (): ReactElement => {
  return (
    <form id="form">
      <InputField label="Name" />
      <InputField label="Username" />
      <InputField label="Email" />
      <InputField label="Password" />
      <InputField label="Confirm password" />
      <SubmitButton />
    </form>
  );
};
