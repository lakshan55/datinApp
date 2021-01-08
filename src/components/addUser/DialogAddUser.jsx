import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Stepper,
  Step,
  StepConnector,
  StepLabel,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Grow,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItem,
  Grid,
} from "@material-ui/core";

import DevicesOtherOutlined from "@material-ui/icons/DevicesOtherOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import FormikInput from "../commonComponents/FormikInput";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function DialogAddUser(props) {
  const { classes, dialogOpenState, handleDialogClose, refreshTable } = props;

  // full details object
  const [details, setDetails] = React.useState([]);

  // Snackbar states.
  const [snackText, setSnackText] = React.useState();
  const [snackVariant, setSnackVariant] = React.useState();

  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    countryCode: "",
    about: "",
    lat: "",
    long: "",
  };

  const validationSchema = Yup.object({
     firstName: Yup.string().required("Required"),
     lastName: Yup.string().required("Required"),
     gender: Yup.string().required("Required"),
     birthday: Yup.string().required("Required"),
     phone: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
     country: Yup.string().required("Required"),
     about: Yup.string().required("Required"),
  });
 
  const onSubmit = async (values, submitProps) => {
    const getToken = localStorage.getItem("session2");
 

    values.lat = "0.2545";
    values.long = "-9.525566";
    values.countryCode = "lk";
    const packet = {
      method: "POST",
      headers: {
        //   Accept: "application/json, text/plain, *!/!*",
        "Content-Type": "application/json",
        "auth-token": getToken,
      },

      body: JSON.stringify(values),
    };

    const url = "https://wataniface.herokuapp.com/admin/addFakeUser";

    await fetch(url, packet)
      .then((response) => response.json())
      .then((result) => {
        // refreshTable();
        handleDialogClose();
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Dialog
        open={dialogOpenState}
        TransitionComponent={Transition}
        aria-labelledby="add-card-scheme-dialog"
        scroll="body"
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle className={classes.cardHeader} id="add-card-scheme-title">
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <DevicesOtherOutlined
                fontSize="large"
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Add User</Typography>
            </ListItemText>
          </ListItem>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormikInput
                        name="firstName"
                        type="text"
                        label={"First Name"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        name="lastName"
                        type="text"
                        label={"Last Name"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput name="gender" type="text" label={"Gender"} />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        name="birthday"
                        type="date"
                        label={"Birthday"}
                        shrink
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        name="phone"
                        type="number"
                        label={"Phone No"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput name="email" type="text" label={"E-mail"} />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        name="address"
                        type="text"
                        label={"Address"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput name="city" type="text" label={"City"} />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        name="country"
                        type="text"
                        label={"Country"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput name="About" type="text" label={"About"} />
                    </Grid>

                    <Grid
                      container
                      style={{ margin: "2rem" }}
                      item
                      xs={12}
                      justify="flex-end"
                    >
                      <Button
                        variant="contained"
                        className={classes.btnBack}
                        onClick={handleDialogClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.nextbtn}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogAddUser;
