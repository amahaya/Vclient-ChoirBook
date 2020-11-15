import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { useAuthContext } from "../../context/authContext";

const StyledTextField = styled(TextField)`
  background-color: #efe8dc;
  border-radius: 5px;
  width: 100%;
  margin: 5px;
`;

const StyledButton = styled(Button)`
  text-align: center;
  background-color: #a68445;
`;
const API = "http://localhost:1812/api";
const URL = `${API}/users/login/`;

function LoginForm() {
  const tot = useAuthContext();
  console.log(tot);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    tot.userHasAuthenticated(true);
    fetch(URL, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => tot.userHasAuthenticated(true));
  };

  return (
    <>
      {tot.isAuthenticated && <span>Je suis connecté </span>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          type="password"
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

export default LoginForm;
