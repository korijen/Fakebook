import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { setAuthHeader } from "../axios_helper";

export default class Appbar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    setAuthHeader(null);
    window.location.reload();
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                marginLeft: this.props.showLogout === "false" ? "2%" : "6.4%",
              }}
            >
              Fakebook
            </Typography>
            <Button
              id="logoutBtn"
              onClick={this.logout}
              sx={{
                display: this.props.showLogout === "false" ? "none" : "flex",
              }}
              color="inherit"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
