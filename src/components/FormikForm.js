import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import * as Yup from "yup";

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

const useStyles = makeStyles(theme => ({
  formStyles: {
    margin: "auto",
    padding: 8,
    border: "dotted red"
  }
}));

const FormikForm = () => {
  const classes = useStyles();
  return (
    <Formik
      validationSchema={formValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
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
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                  margin="normal"
                ></TextField>
                <Typography>
                  {errors.name && touched.name && errors.name}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="standard-name"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  margin="normal"
                  onBlur={handleBlur}
                ></TextField>
                <Typography>
                  {errors.email && touched.email && errors.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Comments"
                  multiline
                  value={values.comment}
                  name="comment"
                  onChange={handleChange}
                  margin="normal"
                  onBlur={handleBlur}
                />

                <Typography>
                  {errors.comment && touched.comment && errors.comment}
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
      }}
    </Formik>
  );
};

export default FormikForm;
