import React from "react";
import { withFormik, Field, ErrorMessage } from "formik";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  formStyles: {
    margin: "auto",
    padding: 8,
    border: "dotted blue"
  }
}));
const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  comment: Yup.string().required("Required")
});
const FormikCustomComponents = ({ values, errors, touched, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <form
        autoComplete="off"
        className={classes.formStyles}
        onSubmit={handleSubmit}
      >
        <Grid item xs={8}>
          <Typography align="left">Name</Typography>
          <Field
            id="standard-name"
            label="Name"
            name="name"
            margin="normal"
          ></Field>

          <Typography>
            <ErrorMessage name="name" />
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography align="left">Email</Typography>
          <Field
            id="standard-name"
            label="Email"
            name="email"
            margin="normal"
          ></Field>
          <Typography>
            <ErrorMessage name="email" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="left">Comments</Typography>
          <Field
            id="standard-multiline-flexible"
            label="Comments"
            multiline
            component="textarea"
            name="comment"
            margin="normal"
          />

          <Typography>
            <ErrorMessage name="comment" />
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            disabled={
              !Object.keys(values).length || !!Object.keys(errors).length
            }
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default withFormik({ validationSchema: formValidation })(
  FormikCustomComponents
);
