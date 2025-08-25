import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
} from "react";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";

export const Form = (): ReactElement => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordValid = formValues.password.length >= 8;
  const passwordsMatch = formValues.password === formValues.confirmPassword;
  const canSubmit = passwordValid && passwordsMatch;

  if (canSubmit) {
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.password.length < 8) {
      alert("Password must be 8 characters or longer");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      alert("The passwords must match");
      return;
    }
    console.log("Name:", formValues.name);
    console.log("Username:", formValues.username);
    console.log("Email:", formValues.email);
    console.log("Password:", formValues.password);

    setFormValues({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form id="form" onSubmit={handleSumbit}>
      <InputField
        inputId="1"
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      <InputField
        inputId="2"
        label="Username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <InputField
        inputId="3"
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <InputField
        inputId="4"
        label="Password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <InputField
        inputId="5"
        label="Confirm password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      <SubmitButton canSubmit={canSubmit} />
    </form>
  );
};
