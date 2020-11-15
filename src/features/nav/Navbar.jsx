import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-colorPrimary {
    background-color: #a68445;
  }
`;

const Navbar = () => {
  const history = useHistory();
  const navigate = (path) => history.push(path);
  return (
    <StyledAppBar position="static" color="primary">
      {" "}
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit" onClick={(e) => navigate("/")}>
          Login
        </Button>{" "}
        <Button color="inherit" onClick={(e) => navigate("/choirbook/home")}>
          Messages
        </Button>{" "}
        <Button color="inherit" onClick={(e) => navigate("/choirbook/profil")}>
          Profile
        </Button>{" "}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
