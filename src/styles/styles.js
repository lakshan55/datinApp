import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    profileImg:{
      width:"25rem",
      height:"15rem",
      margin:"2rem",
      borderRadius:"1rem"

    },
    btn: {
      color: "#fff",
      backgroundColor: "#F7B62D",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#E2AE0C",
        color: "#fff",
      },
    },
    btnBack: {
      color: "#fff",
      backgroundColor: "#5DADE2",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#5DADE2",
        color: "#fff",
      },
    },
    nextbtn: {
      color: "#fff",
      backgroundColor: "#2471A3",
      marginLeft: "1rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#2471A3",
        color: "#fff",
      },
    },
    allocateBtn: {
     
      color: "#fff",
      backgroundColor: "#F7B62D",
      marginLeft: "1rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#E2AE0C",
        color: "#fff",
      },
    },
    submitBtn: {
      color: "#fff",
      width: "6rem",
      backgroundColor: "#F7B62D",
      marginLeft: "1rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#E2AE0C",
        color: "#fff",
      },
    },
    inputBtn: {
      color: "#fff",
      width: "8rem",
      height: "2rem",
      background: "linear-gradient(to right, #373b44, #4286f4)",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#A04000",
        color: "#fff",
      },
    },
    importBtn: {
      color: "#fff",
      width: "10rem",
      height: "2rem",
      background: "linear-gradient(to right, #373b44, #4286f4)",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#A04000",
        color: "#fff",
      },
    },
    cardHeader: {
      background: "linear-gradient(to right, #373b44, #4286f4)",
      color: "#fff",
      borderBottom: "2px solid #000",
  
      "&:hover": {
        color: "#fff",
      },
    },
    dialogContentText: {
      color: "#000",
      fontSize: "1.1rem",
    },
    listIcons: {
      color: "#fff",
    },
    progress: {
      color: "#fff",
      height: "2rem",
    },
    tidList: {
      // width: 200,
      height: 230,
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
    },
    tidButton: {
      margin: theme.spacing(0.5, 0),
      width: "6rem",
      backgroundColor: "#FFFEBF",
    },
    itrmListClass1:{
      backgroundColor:"#F9E79F"
    },
    itrmListClass2:{
      backgroundColor:"#F7DC6F"
    },
    cardClass: {
      boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
      width: "100%",
      "&:hover": {
        boxShadow: " 0px 50px 100px -10px rgba(0, 0, 0, 0.4",
      },
    },
  }));