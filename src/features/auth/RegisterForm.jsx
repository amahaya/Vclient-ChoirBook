import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";

const StyledTextField = styled(TextField)`
  background-color: #efe8dc;
  border-radius: 5px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  text-align: center;
  background-color: #a68445;
`;
const API = "http://localhost:1812/api";
const URL = `${API}/users/register/`;
function RegisterForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch(URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          id="outlined-basic"
          label="Firstname"
          variant="outlined"
          inputRef={register}
          name="firstName"
        />
        <StyledTextField
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          inputRef={register}
          name="lastName"
        />
        <StyledTextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          inputRef={register}
          name="username"
        />
        <StyledTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          inputRef={register}
          name="email"
        />
        <StyledTextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          inputRef={register}
          name="password"
        />
        <p style={{ textAlign: "center" }}>
          <StyledButton
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
          >
            ENVOYER
          </StyledButton>
        </p>
      </form>
    </>
  );
}

export default RegisterForm;
