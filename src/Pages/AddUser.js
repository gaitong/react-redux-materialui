import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, settError] = useState("");
  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      settError("Please Input all field");
    } else {
      dispatch(addUser(state));
      navigate("/");
      settError("");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
