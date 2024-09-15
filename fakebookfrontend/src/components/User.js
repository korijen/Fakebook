import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

export default function User() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const user = { name, address };
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("New user added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>

      <Paper>
        <h1>Users</h1>

        <Paper elevation={3}>
          {users.map((user) => (
            <Paper
              elevation={6}
              style={{ margin: "10px", padding: "15px", textAlign: "left" }}
              key={user.id}
            >
              Id:{user.id}
              Name:{user.name}
              Address:{user.address}
            </Paper>
          ))}
        </Paper>
      </Paper>
    </Box>
  );
}
