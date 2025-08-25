import type { ReactElement } from "react";

interface SubmitButtonProps {
  canSubmit: boolean;
}

export const SubmitButton = ({
  canSubmit,
}: SubmitButtonProps): ReactElement => {
  return (
    <button
      type="submit"
      id="submit"
      className={canSubmit ? "active" : ""}
    >
      Sign up
    </button>
  );
};
