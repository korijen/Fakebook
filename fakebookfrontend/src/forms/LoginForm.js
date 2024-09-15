import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "../index.css";
import Appbar from "../components/Appbar";
import AppContent from "../components/AppContent";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "login",
      firstName: "",
      lastName: "",
      login: "",
      password: "",
      onLogin: props.onLogin,
      onRegister: props.onRegister,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitLogin = (e) => {
    this.state.onLogin(e, this.state.login, this.state.password);
  };

  onSubmitRegister = (e) => {
    console.log(this.state);
    this.state.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.login,
      this.state.password
    );
  };

  render() {
    return (
      <div id="authContainer">
        <Appbar showLogout="false" />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Button
            onClick={() => {
              this.setState({ active: "login" });
            }}
            variant={this.state.active === "login" ? "contained" : "outlined"}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              this.setState({ active: "register" });
            }}
            variant={
              this.state.active === "register" ? "contained" : "outlined"
            }
          >
            Register
          </Button>
        </Box>

        {/* LOGIN */}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: this.state.active === "register" ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
            justifyContent: "center",
            margin: "auto",
            marginTop: "2em",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            required
            id="mail_field"
            label="E-mail"
            onChange={this.onChangeHandler}
            name="login"
          />
          <TextField
            required
            id="password_field"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={this.onChangeHandler}
            name="password"
          />
          <Button variant="contained" onClick={this.onSubmitLogin}>
            Login
          </Button>
        </Box>

        {/* REGISTER */}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: this.state.active === "login" ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
            justifyContent: "center",
            margin: "auto",
            marginTop: "2em",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="first_name_field"
            label="First Name"
            onChange={this.onChangeHandler}
            name="firstName"
          />
          <TextField
            required
            id="last_name_field"
            label="Last Name"
            onChange={this.onChangeHandler}
            name="lastName"
          />
          <TextField
            required
            id="mail_field_reg"
            label="E-mail"
            onChange={this.onChangeHandler}
            name="login"
          />
          <TextField
            required
            id="password_field_reg"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={this.onChangeHandler}
            name="password"
          />
          <Button variant="contained" onClick={this.onSubmitRegister}>
            Register
          </Button>
        </Box>
      </div>
    );
  }
}
