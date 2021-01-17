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
  Avatar,
  Grow,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DevicesOtherOutlined from "@material-ui/icons/DevicesOtherOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import FormikInput from "../commonComponents/FormikInput";
import CommonSelect from "../commonComponents/CommonSelect";

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
  });
  //show the image
  const [imageName, setImageName] = React.useState(null);
  const [baseImg, setBaseImg] = React.useState("");

  //upload image
  const handleUploadImg = (e) => {
    const files = e.target.files;
    const file = files && files[0];
    file && setImageName(URL.createObjectURL(file));
    file && getBase64(file);
  };

  // get base 64 code
  const onLoad = (fileString) => {
    setBaseImg(fileString);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
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
        if (result.status === "success") {
          refreshTable();
          submitProps.setSubmitting(false);
          submitProps.resetForm();
          handleDialogClose();
        }
      })
      .catch((err) => console.log(err));
  };

  const genderOptions = [
    {
      value: "Male",
    },
    {
      value: "Female",
    },
  ];

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
                  <Grid
                    container
                    //  justify="center"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                  >
                    <div>
                      <Avatar
                        style={{ width: "8rem", height: "8rem" }}
                        alt="Profile_img"
                        src={imageName}
                      />

                      <IconButton
                        style={{
                          margin: "-1.6rem 0rem 0rem 2.8rem",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          width: "2rem",
                          height: "2rem",
                          outline: "none",
                        }}
                      >
                        <input
                          onChange={handleUploadImg}
                          name="summaryImg"
                          accept="image/*"
                          hidden={true}
                          type="file"
                          id="summary-img-upload"
                        />
                        <label htmlFor="summary-img-upload">
                          <PhotoCameraIcon
                            style={{
                              color: "#8D95A2",
                              fontSize: "1rem",
                              marginTop: "0.4rem",
                            }}
                          />
                        </label>
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormikInput
                        name="firstName"
                        type="text"
                        label={"First Name"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput
                        name="lastName"
                        type="text"
                        label={"Last Name"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <CommonSelect
                        name="gender"
                        label={"Gender"}
                        options={genderOptions}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput
                        name="birthday"
                        type="date"
                        label={"Birthday"}
                        shrink
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput
                        name="phone"
                        type="number"
                        label={"Phone No"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput name="email" type="text" label={"E-mail"} />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput
                        name="address"
                        type="text"
                        label={"Address"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput name="city" type="text" label={"City"} />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikInput
                        name="country"
                        type="text"
                        label={"Country"}
                      />
                    </Grid>
                    <Grid item xs={4}>
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
