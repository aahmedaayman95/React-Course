import { useState } from "react";
import { styled } from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <DivContainer>
        <p>
          <Label $isValid={emailNotValid}>Email</Label>
          <Input
            type="email"
            style={
              emailNotValid
                ? {
                    color: "#ef4444",
                    borderColor: "blue",
                    backgroundColor: "#fed2d2",
                  }
                : {}
            }
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label isValid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </DivContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
