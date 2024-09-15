import * as React from "react";

import { request, setAuthHeader } from "../axios_helper";

import LoginForm from "../forms/LoginForm";
import AuthContent from "./AuthContent";
import Appbar from "./Appbar";

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentToShow: "welcome",
    };
  }

  login = () => {
    this.setState({ componentToShow: "login" });
  };

  logout = () => {
    this.setState({ componentToShow: "welcome" });
    setAuthHeader(null);
  };

  onLogin = (e, username, password) => {
    e.preventDefault();
    if (username && password) {
      this.state.mail = username;
      request("POST", "/login", {
        login: username,
        password: password,
      })
        .then((response) => {
          setAuthHeader(response.data.token);

          localStorage.setItem('loggedUserID', response.data.id);

          this.setState({ componentToShow: "messages" });
        })
        .catch((error) => {
          setAuthHeader(null);
          if (error.response.status == 404) {
            window.alert("Email doesn't exist in database.");
          } else if (error.response.status == 400) {
            window.alert("Incorrect password.");
          } else {
            window.alert("Unexpected error occurred. Please try again.");
          }
          this.setState({ componentToShow: "welcome" });
        });
    } else {
      window.alert(
        "At least one field was empty. Please fill all the fields to proceed."
      );
    }
  };

  onRegister = (event, firstName, lastName, userName, password) => {
    event.preventDefault();
    if (firstName && lastName && userName && password) {
      request("POST", "/register", {
        firstName: firstName,
        lastName: lastName,
        login: userName,
        password: password,
      })
        .then((response) => {
          localStorage.setItem('loggedUserID', response.data.id);
          setAuthHeader(response.data.token);
          this.setState({ componentToShow: "messages" });
        })
        .catch((error) => {
          setAuthHeader(null);
          if (error.response.status == 400) {
            window.alert("Selected e-mail already exists in database.");
          } else {
            window.alert("Unexpected error occurred. Please try again.");
          }
          this.setState({ componentToShow: "welcome" });
        });
    } else {
      window.alert(
        "At least one field was empty. Please fill all the fields to proceed."
      );
    }
  };

  render() {
    return (
      <>
        {this.state.componentToShow === "welcome" && (
          <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />
        )}
        {this.state.componentToShow === "messages" && (
          <AuthContent mail={this.state.mail} />
        )}
      </>
    );
  }
}
