import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formStyles: {
    margin: "auto",
    padding: 8,
    border: "dotted"
  }
}));

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const OnlyReactForm = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState();
  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = (value = false) => {
    if (!error || value) {
      if (!formValues.email) {
        setError("Empty Mail");
        return false;
      } else if (!emailValidator.test(formValues.email)) {
        setError("Invalid Mail");
        return false;
      } else if (!formValues.name) {
        setError("Empty Name");
        return false;
      } else if (!formValues.comment) {
        setError("Empty Comment");
        return false;
      }
      return true;
    } else {
      if (emailValidator.test(formValues.Email)) {
        setError();
      }
      return validateForm(true);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!error && validateForm()) {
      alert(`Submitting Name ${JSON.stringify(formValues)}`);
    }
  };
  return (
    <Grid container>
      <form
        autoComplete="off"
        className={classes.formStyles}
        onSubmit={handleSubmit}
      >
        <Grid item xs={8}>
          <TextField
            id="standard-name"
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="standard-name"
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-multiline-flexible"
            label="Comments"
            multiline
            value={formValues.comment}
            name="comment"
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <Typography>{!!error && error}</Typography>
          <Button type="submit" variant="contained" disable={error}>
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default OnlyReactForm;
