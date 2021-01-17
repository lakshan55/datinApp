import React from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField, Link, Grid, Typography } from "@material-ui/core";

import { purple } from "@material-ui/core/colors";

import logo from "../../img/logo.png";

const inputProps = {
  backgroundColor: "#FFFFFF ",
  color: "#000",
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#9A9A9A",
    },
    "& .Mui-focused": {
      borderBottomColor: "#9A9A9A",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9A9A9A",
      },
      "&:hover fieldset": {
        borderColor: "#9A9A9A",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9A9A9A",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#000",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#ffff",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  form: {
    width: "80%", // Fix IE 11 issue.

    marginTop: theme.spacing(1),
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    marginTop: "10%",
    color: theme.palette.getContrastText(purple[500]),
    background:
      "transparent linear-gradient(179deg, #EBCC4F 0%, #E0C24B 15%, #E8C94E 22%, #7A6929 89%, #766628 100%) 0% 0% no-repeat padding-box",
    width: "100px",

    "&:hover": {
      backgroundColor: "#E0C24B",
    },
  },
}))(Button);

const LoginScreen = () => {
  const classes = useStyles();
  let history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [snackText, setSnackText] = React.useState();
  const [snackVariant, setSnackVariant] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [loginButtonText, setLoginButtonText] = React.useState("Login");
  const [forgotPassword, setForgotPassword] = React.useState(false);

  const login = (event) => {
    event.preventDefault();

    let values = {
      email: email,
      password: password,
    };
    // let formData = new FormData();

    // formData.append("email", email);
    // formData.append("password", password);

    const packet = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: "token",
      },
      // headers: headers,
      //   body: formData,
      body: JSON.stringify(values),
    };

    setLoading(true);
    //192.168.8.200

    fetch("https://wataniface.herokuapp.com/admin/login", packet)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == "success") {
          localStorage.setItem("session2", result.token);
          history.push("dashboard/adduser");
        }
      })
      .catch((err) => console.log(555));
  };
  return (
    <div className="background-image">
      <div className="container ">
        <div
          className="row row-background  "
          //    style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Typography
                style={{ color: "#fff", zIndex: "1200" }}
                variant="body1"
                color="textSecondary"
              >
                Welcome back
              </Typography>

              <Typography variant="h5" gutterBottom>
                Login to your account
              </Typography>
              <Grid item xs={12} style={{ marginTop: "30%" }}>
                <form className={classes.form} noValidate>
                  <CssTextField
                    variant="filled"
                    margin="dense"
                    required
                    fullWidth
                    id="email"
                    label="Email "
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    autoFocus
                    style={{ marginTop: "20%" }}
                    inputProps={{
                      className: inputProps,
                    }}
                  />
                  <CssTextField
                    variant="filled"
                    margin="dense"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    style={{ marginTop: "10%" }}
                  />
                  <Grid container>
                    <Grid item xs>
                      <Link
                        className="float-right"
                        href="#"
                        variant="body2"
                        color="textSecondary"
                        onClick={(event) => {
                          event.preventDefault();
                          setForgotPassword(true);
                        }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    onClick={login}
                  >
                    {/* {loginButtonText} */}
                    sign in
                  </ColorButton>
                </form>
              </Grid>
            </Grid>
            {/* <Grid item xs={8} className=" left-side-qpaylogo">
              <div className="logo-content">
                <img
                  className="qpay-logo-login-page"
                  src={logo}
                  alt="qpay-logo"
                />
                <div className="line"></div>
                <p
                  style={{
                    marginTop: "5%",
                    color: "#ECECEE",
                    fontSize: "15px",
                  }}
                >
                  To keep connected with us, please loging with your login
                  credentials
                </p>

                <div
                  className="row"
                  style={{
                    marginTop: "200px",
                    marginLeft: "4px",
                    color: "#9A9A9A",
                    fontSize: "13px",
                  }}
                ></div>
              </div>
            </Grid> */}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
