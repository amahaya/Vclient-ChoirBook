import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import RegisterForm from "./RegisterForm";

function LoginPage() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignContent="center"
            style={{
              backgroundColor: "#A68445",
              height: "100vh",
              color: "white",
            }}
            spacing={0}
          >
            <img
              src="/assets/blanc_logo_avec_nom_incline.png"
              style={{
                position: "absolute",
                height: "120px",
                width: "120px",
                left: "24px",
                top: "19px",
              }}
            />
            <div style={{ width: "379px" }}>
              <Typography variant="h3" component="h2" paragraph>
                ChoirBook
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignContent="center"
            style={{ height: "100vh" }}
            spacing={0}
          >
            <div style={{ width: "379px" }}>
                <RegisterForm/>
                <RegisterForm/>
                <RegisterForm/>
                <RegisterForm/>
                <RegisterForm/>
                <RegisterForm/>
                <RegisterForm/>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
