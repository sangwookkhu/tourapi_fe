import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface LoginFormProps {
  idPlaceHolder: string;
  passwordPlaceHolder: string;
  buttonContent: string;
  buttonAction: () => void;
}

export default function LoginForm({
  idPlaceHolder,
  passwordPlaceHolder,
  buttonContent,
  buttonAction,
}: LoginFormProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <Input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder={idPlaceHolder}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={passwordPlaceHolder}
      />
      <Button onClick={buttonAction}>
        <div>{buttonContent}</div>
      </Button>
    </React.Fragment>
  );
}
