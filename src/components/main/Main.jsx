import React, { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { Redirect, Switch, Route } from "react-router-dom";

import AppDrawer from "./AppDrawer";
import AppTopBar from "./AppTopBar";
import AddUser from "../addUser/AddUser";

// Drawer width.
const drawerWidth = 300;

// font size object
const globalFontSize = {
  size1: "1.3rem",
  size2: "1.2rem",
  size3: "1rem",
  size4: "0.7rem",
  size5: "0.6rem",
  size6: "0.75rem",
  size7: "0.9rem",
  size8: "0.6rem",
};
const golabalColors = {
  red01: "#f8767d",
  blue01: "#58f0c7",
  green1: "#8edf82",
  green: "#a8e289",
  ash01: "#aba8aa",
  ash02: "#dedfe1",
  black02: "#4f5055",
  blue02: "#4c79a2",
  brown: "#888",
  newGreen: "#0aeac4",
};
export default function MainContainer({ logout }) {
  // zoom out
  {
    /*
    if (drawerwindow > 1370) {
      document.body.style.zoom = 1;
    } else {
      document.body.style.zoom = 0.8;
    }
  */
  }

  // Drawer state
  const [open, setOpen] = React.useState(true);

  /**
   * Drawer state handler.
   */
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  /**
   * Drawer state handler.
   */
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Notification Panel state.
  const [anchorNotification, setAnchorNotification] = React.useState(null);
  const menuOpen = Boolean(anchorNotification);

  /**
   * Notification Panel origin handler.
   * @param event
   */
  const handleNotification = (event) => {
    setAnchorNotification(event.currentTarget);
  };

  /**
   * Notification Panel state handler.
   */
  const handleNotificationClose = () => {
    setAnchorNotification(null);
  };

  // Helper Panel state.
  const [anchorHelper, setAnchorHelper] = React.useState(null);
  const helperOpen = Boolean(anchorHelper);

  /**
   * Helper Panel origin handler.
   * @param anchor
   */
  const handleHelper = (anchor) => {
    setAnchorHelper(anchor);
  };

  /**
   * Helper Panel origin handler for the first time.
   * @param event
   */
  const handleInitialHelper = (event) => {
    setAnchorHelper(event.currentTarget);
  };

  /**
   * Helper Panel state handler.
   */
  const handleHelperClose = () => {
    setAnchorHelper(null);
  };

  // Report Panel state.
  const [anchorReport, setAnchorReport] = React.useState(null);
  const reportOpen = Boolean(anchorReport);

  /**
   * Report Panel origin handler.
   * @param anchor
   */
  const handleReport = (anchor) => {
    setAnchorReport(anchor);
  };

  /**
   * Report Panel state handler.
   */
  const handleReportClose = () => {
    setAnchorReport(null);
  };

  // Feedback Panel state.
  const [anchorFeedback, setAnchorFeedback] = React.useState(null);
  const feedbackOpen = Boolean(anchorFeedback);

  /**
   * Feedback Panel origin handler.
   * @param anchor
   */
  const handleFeedback = (anchor) => {
    setAnchorFeedback(anchor);
  };

  /**
   * Feedback Panel state handler.
   */
  const handleFeedbackClose = () => {
    setAnchorFeedback(null);
  };

  // Private mode state.
  const [privateMode, setPrivateMode] = useState(false);

  // Active tab state.
  const [active, setActive] = React.useState(
    window.location.pathname.toString().replace("/main/", "")
  );
  /**
   * login animation
   */
  const [logAnimaton, setLoganmation] = useState(false);

  const logAnimationFuc = () => {
    setLoganmation(true);
  };

  // Active tab initializer.
  React.useEffect(() => {
    setActive(window.location.pathname.toString().replace("/main/", ""));
    logAnimationFuc();
    // logAnimationFuc();
  }, []);

  // Add Note state.
  const [anchorNote, setAnchorNote] = React.useState(null);
  const noteOpen = Boolean(anchorNote);

  // Add client state.
  const [anchorNote2, setAnchorNote2] = React.useState(null);
  const noteOpen2 = Boolean(anchorNote2);

  /**
   * Add Note origin handler.
   * @param event
   */
  const handleNote = (event) => {
    setAnchorNote(event.currentTarget);
  };
  /**
   * Add client origin handler.
   * @param event
   */
  const handleClient = (event) => {
    setAnchorNote2(event.currentTarget);
  };

  /**
   * Add Note state handler.
   */
  const noteClose = () => {
    setAnchorNote(null);
  };
  /**
   * Add client state handler.
   */
  const noteClose2 = () => {
    setAnchorNote2(null);
  };
  // Settings menu state
  const [subOpen, setSubOpen] = useState(false);

  /**
   * Settings menu state handler.
   */
  const handleClick = () => {
    setSubOpen(!subOpen);
  };

  // Add Lead state.
  const [anchorLead, setAnchorLead] = React.useState(null);
  const leadOpen = Boolean(anchorLead);

  /**
   * Add Lead origin handler.
   * @param event
   */
  const handleLead = (event) => {
    setAnchorLead(event.currentTarget);
  };

  /**
   * Add Lead state handler.
   */
  const leadClose = () => {
    setAnchorLead(null);
  };

  // Add Task state.
  const [anchorTask, setAnchorTask] = React.useState(null);
  const taskOpen = Boolean(anchorTask);

  /**
   * Add Task origin handler.
   * @param event
   */
  const handleTask = (event) => {
    setAnchorTask(event.currentTarget);
  };

  /**
   * Add Task state handler.
   */
  const taskClose = () => {
    setAnchorTask(null);
  };

  // Settings menu state

  /**
   * Settings menu state handler.
   */
  const [golbalShortCut, setGolbalShortCut] = React.useState(false);
  const handleClickAway = () => {
    setGolbalShortCut(false);
  };
  const gloableShortCutOpen = () => {
    setGolbalShortCut(true);
  };

  // Styles
  const useStyles = makeStyles((theme) => ({
    "@global": {
      body: {
        backgroundColor: "#F8F9F9",
      },
    },

    root: {
      display: "flex",
      width: "1366px",
      height: "100%",
      backgroundSize: "cover",
      //   backgroundImage: dark ? `url(${DarkBackground})` : `url(${Background})`,
      [theme.breakpoints.up(1366)]: {
        width: "100%",
        height: "100%",
      },
    },

    background: {
      zIndex: 0,
      height: "100%",
      width: "1700px",
      position: "absolute",
      top: "0",
      left: "0",
      [theme.breakpoints.up(1366)]: {
        width: "100%",
        height: "100%",
      },
    },

    toolbar: {
      paddingRight: 24,

      width: "100%",
      [theme.breakpoints.up(1366)]: {
        width: "100%",
      },
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "1rem 0.7rem",
      ...theme.mixins.toolbar,
      color: "white",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: "0rem",
      left: "0rem",

      color: "#000",
      backgroundColor: "#131F25",
      boxShadow: "0 0 0 0 rgb(0, 0, 0)",
      width: open ? "80%" : "100%",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      marginTop: "0rem",
      left: "0rem",

      width: "80%",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: "-0.5rem",
      [theme.breakpoints.up(1366)]: {
        marginRight: 36,
      },
    },
    appTopMenuButton: {
      color: "#5FDA72",
      "&:hover": {
        color: "#8defce",
      },
    },
    notifiactionShortcut: {
      flexGrow: 1,
      position: "absolute",
      right: "0rem",

      [theme.breakpoints.down("sm")]: {
        marginRight: "-20rem",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "0rem",
      },

      [theme.breakpoints.up("lg")]: {
        marginRight: "1rem",
      },
    },
    menuButtonHidden: {
      display: "none",
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "#131F25",
      color: "#F6F8FE",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      height: "100%",
      overflow: "auto",
      [theme.breakpoints.up("lg")]: {
        minHeight: "1080px",
      },
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(-500),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(-509),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100%",
      overflow: "auto",
      width: "100%",
    },
    container: {
      padding: theme.spacing(4),
      width: "100%",
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      backgroundColor: "#F8F9F9 ",
      color: "#000",
      borderRadius: "50%",
    },
    fixedHeight: {
      height: "17rem",
    },
    title: {
      width: "10rem",
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: "1.5rem",
      backgroundColor: fade(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 1),
      },
      padding: "0.2rem",
      // width: "25rem",
      marginLeft: "0rem",

      // [theme.breakpoints.up(1366)]: {
      //   marginLeft: theme.spacing(1),
      //   width: "35rem",
      // },
      [theme.breakpoints.down("sm")]: {
        width: "40%",
        minWidth: "20rem",
      },
      [theme.breakpoints.up("md")]: {
        width: "30%",
      },

      [theme.breakpoints.up("lg")]: {
        width: "40%",
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-0.1rem",
      color: "#131F25",
      opacity: "0.5",
    },
    inputRoot: {
      color: "#000",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "20rem",
      paddingLeft: "2.5rem",
      marginLeft: "1rem",
      [theme.breakpoints.up(1366)]: {
        width: "30rem",
        paddingLeft: "2.5rem",
      },
    },

    list: {
      width: 200,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    listItem: {
      borderRadius: "1.5rem",
      backgroundColor: "#212c32",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "#283339",
      },
    },
    listItemCollapse: {
      borderRadius: "1.5rem 1.5rem 0rem 0rem",
      // borderRadius: "1.5rem",
      backgroundColor: "#212c32",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "#283339",
      },
    },
    closedListItem: {
      borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
      backgroundColor: "transparent",
      margin: "0.5rem 0.1rem 0.5rem -1.3rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    activeListItem: {
      borderRadius: "1.5rem",
      background:
        "transparent linear-gradient(270deg, #63C151 0%, #00A876 100%) 0% 0% no-repeat padding-box",
      margin: "0.5rem 0.1rem",

      "&:hover": {
        backgroundColor: "#283339",
      },
    },

    //sub list item
    subListCollapse: {
      backgroundColor: "#464a4e",
      margin: "-1.5rem 0rem 0rem 0.2rem",
      paddingBottom: "0rem 0rem 0.8rem 0rem",
      borderRadius: "0 0 1rem 1rem",
    },
    subItemComponents: {
      borderRadius: "1.5rem",
      backgroundColor: "#464a4d",
      margin: "0.5rem 0.5rem",
      paddingTop: "0.3rem",
      paddingBottom: "0.3rem",
      width: "95%",
      "&:hover": {
        backgroundColor: "#283339",
      },
    },
    activeListSubItem: {
      width: "95%",
      borderRadius: "1.5rem",
      margin: "0.5rem 0.5rem",
      paddingTop: "0.3rem",
      paddingBottom: "0.3rem",
      background:
        "transparent linear-gradient(270deg, #63C151 0%, #00A876 100%) 0% 0% no-repeat padding-box",

      "&:hover": {
        backgroundColor: "#283339",
      },
    },
    activeListItemCloseDrawer: {
      background:
        "transparent linear-gradient(270deg, #63C151 0%, #00A876 100%) 0% 0% no-repeat padding-box",
      width: "3rem",
      height: "3rem",
    },
    expansionTitle: {
      borderBottomRightRadius: "1rem",
      borderTopLeftRadius: "1rem",
    },
    exp: {
      borderBottomRightRadius: "1rem",
      borderTopLeftRadius: "1rem",
    },
    logo: {
      height: "3rem",
      zIndex: "1",
      width: "10rem",

      [theme.breakpoints.up(1366)]: {
        marginLeft: "-1rem",
      },
    },
    profile: {
      width: "100%",
      height: "auto",
      textAlign: "center",
      marginBottom: "2rem",
    },
    bigAvatar: {
      margin: "0 35%",
      width: 80,
      height: 80,
    },
    badge: {
      margin: "3% 40%",
      width: 90,
      height: 90,
      backgroundColor: "#2DA995",
      boxShadow: "3px 3px 6px #00000029",
    },
    chatList: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listAction: {
      borderRadius: "1.5rem",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    closedListAction: {
      borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
      margin: "0.5rem -3.5rem",
    },
    subListItem: {
      backgroundColor: "#212c32",
      margin: "0 0.1rem",
      "&:hover": {
        backgroundColor: "#283339",
      },
      paddingLeft: theme.spacing(5),
      fontSize: "0.2rem",
    },
    subListItemEnd: {
      borderRadius: "0 0 1.5rem 1.5rem",
      backgroundColor: "#212c32",
      margin: "0 0.1rem",
      "&:hover": {
        backgroundColor: "#283339",
      },
      paddingLeft: theme.spacing(5),
      fontSize: "0.2rem",
    },
    closedSubListItem: {
      display: "none",
    },
    gridItem: {
      zIndex: 5,
    },
    gridItemTitle: {
      color: "#4D4F5C",
    },
    divider: {
      backgroundColor: theme.palette.divider,
    },
    dividerNotification: {
      backgroundColor: theme.palette.divider,
      margin: "0.5rem 0 0.8rem 0",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    menu: {
      zIndex: theme.zIndex.drawer + 50,
      borderRadius: "5rem",
    },
    helperPopup: {
      zIndex: theme.zIndex.drawer + 50,
      borderRadius: "5rem",
    },
    tile: {
      color: "#94989b",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    tileIcon: {
      fontSize: "5rem",
      marginBottom: "0.5rem",
    },
    speedDial: {
      position: "absolute",
      top: "1.2rem",
      right: "20rem",
      zIndex: theme.zIndex.drawer + 50,
      backgroundColor: "transparent",
    },
    speedDialIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    card: {
      width: 380,
      margin: 0,
      borderRadius: "1rem",
      textAlign: "center",
    },
    noteCard: {
      width: 820,
      padding: "1rem",
      margin: 0,
      borderRadius: "1rem",
    },
    notificationList: {
      width: "100%",
      maxWidth: 380,
      backgroundColor: theme.palette.background.paper,
    },
    containedButton: {
      backgroundColor: "#707070",
      color: "#FFF",
      borderRadius: "2rem",
      fontSize: "0.9rem",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      },
      textTransform: "capitalize",
      margin: "0.6rem 0",
    },
    noteBottomActions: {
      width: 580,
      margin: 0,
      padding: "1rem",
      backgroundColor: "#FFF",
    },
    noteCardContent: {
      width: "100%",
      maxWidth: 580,
    },
    outlinedInput: {
      borderRadius: "0.5rem",

      padding: "1rem",
      color: "#000",
      height: "2rem",
      width: 250,
      backgroundColor: "transparent",
      borderColor: "#000",
      borderWidth: "1rem",
      marginLeft: "-1.7rem",
      "&:focus": {
        outline: "none",
      },
    },
    filledInput: {
      borderRadius: "1rem",
      color: "#000",
      height: "2.5rem",
      margin: "0.5rem 0.5rem 0.5rem 0rem",
      backgroundColor: "transparent",
      width: "100%",

      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      borderWidth: "1px",
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
    filledInputProps: {
      height: "2.5rem",

      padding: "0.5rem",
      width: "100%",
      fontSize: "0.8rem",
      "&:focus": {
        outline: "none",
      },
    },
    AddCircleTextArea: {
      width: "100%",
      color: "#000",
      borderRadius: "1rem",
      padding: "1.5rem",
      backgroundColor: "transparent",
      "&:focus": {
        outline: "none",
      },
      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      borderWidth: "1px",
      "&:hover": {
        // backgroundColor: "#fff"
      },
    },
    threeInput: {
      borderRadius: "1rem",
      padding: "1rem",
      color: "#000",
      height: "2rem",
      width: "15rem",
      backgroundColor: "transparent",
      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      marginTop: "1rem",

      borderWidth: "1px",
      "&:hover": {
        borderColor: "#000000 ",
      },
      "&:focus": {
        borderColor: "#000000 ",
      },
    },
    threeInputProps: {
      height: "2rem",

      margin: 0,
      padding: 0,
      width: "100%",
      fontSize: "0.8rem",
      "&:focus": {
        outline: "none",
        borderColor: "#000000 ",
      },
      borderWidth: "1px",
      "&:hover": {
        borderColor: "#000000 ",
      },
    },
    dropZone: {
      borderRadius: "1.2rem",
      borderWidth: "0.1rem",
      backgroundColor: "#FFF",
      minHeight: 0,
      height: "7rem",
      width: "100%",
      color: "#777",
      backgroundColor: "transparent",
      marginTop: "1rem",
    },
    dropZoneParagraph: {
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
      // backgroundColor: "#30736c"
    },
    fabClosed: {
      position: "fixed",
      width: "4.8rem",
      height: "4.8rem",
      bottom: "2rem",
      right: "2rem",
      zIndex: 1500,
      backgroundColor: "#30736c",
      color: "white",
      "&:hover": {
        backgroundColor: "#30736c",
        color: "white",
      },
      //   transition: "transform .2s ease-in-out"
    },
    fabOpened: {
      position: "fixed",
      width: "4.8rem",
      height: "4.8rem",
      bottom: "2rem",
      right: "2rem",
      zIndex: 1500,
      backgroundColor: "#30736c",
      color: "white",
      "&:hover": {
        backgroundColor: "#30736c",
        color: "white",
      },
      //  transform: "rotate(45deg)",
      //  transition: "transform .2s ease-in-out"
    },
    helperCard: {
      width: 480,
      margin: "0 2rem 1.7rem 0",
      borderRadius: "1.2rem",
      textAlign: "center",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    feedbackCard: {
      width: 480,
      margin: "0 2.2rem 2rem 0",
      borderRadius: "1.2rem",
      textAlign: "center",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    iconButton: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    feedbackButton: {
      backgroundColor: "#FFF",
      borderRadius: "2rem",
      color: "#777",
      padding: "0.5rem 1.5rem",
      cursor: "pointer",
      textAlign: "left",
      width: "26rem",
      transition: "width .2s ease-in-out",
      "&:hover": {
        width: "19rem",
        transition: "width .2s ease-in-out",
      },
      boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      zIndex: 1500,
      position: "absolute",
      top: 0,
      left: 0,
      height: "2.3rem",
    },
    feedbackButtonWrapper: {
      backgroundColor: "#777",
      borderRadius: "2rem",
      color: "#FFF",
      margin: "1rem",
      textAlign: "right",
      width: "26rem",
      height: "2.3rem",

      zIndex: 1200,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingRight: "1.5rem",
      "&:hover $feedbackButton": {
        width: "19rem",
        transition: "width .2s ease-in-out",
      },
      cursor: "pointer",
    },
    feedbackButtonActive: {
      backgroundColor: "#FFF",
      borderRadius: "2rem",
      color: "#777",
      padding: "0.5rem 1.5rem",
      cursor: "pointer",
      textAlign: "left",
      width: "19rem",
      transition: "width .2s ease-in-out",
      boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      zIndex: 1500,
      position: "absolute",
      top: 0,
      left: 0,
      height: "2.3rem",
    },
    feedbackSendButton: {
      borderRadius: "2rem",
      color: "#FFF",
      marginTop: "1rem",
      marginRight: "0.8rem",
      float: "right",
      width: "8rem",
      backgroundColor: "#30736c",
      padding: "0.2rem 0",
      "&:hover": {
        backgroundColor: "#30736c",
      },
    },
    filledSelect: {
      marginTop: "1rem",
      borderRadius: "0.8rem",

      color: "#000",
      height: "2rem",
      width: "22rem",
      marginLeft: "2rem",
      backgroundColor: "#FFF",
      "&:focus": {
        backgroundColor: "#FFF",
      },
    },
    filledSelectProps: {
      height: "2rem",
      paddingLeft: "1rem",
      width: "22rem",
      color: "#6fdpa4",

      backgroundColor: "transparent",
      "&:focus": {
        backgroundColor: "transparent",
      },
      fontSize: "1rem",
    },
    textLabel: {
      fontSize: "0.8rem",
      color: "#707070",
    },
    roundButton: {
      padding: 0,
      borderWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    roundButton1: {
      padding: 0,
      borderWidth: 0,
      borderColor: "#707070",
      backgroundColor: "transparent",
      // "&:hover": {
      //   backgroundColor: "transparent"
      // }
    },
    collapseTitle: {
      cursor: "pointer",
    },
    flag: {
      height: "1rem",
      width: "2rem",
      borderRadius: "0.4rem",
      marginRight: "0.4rem",
    },
    notificationViewAll: {
      cursor: "pointer",
      "&:hover": {
        color: "#FF5733",
      },
    },
    //********* trello board templates start *********/

    //********* trello board templates End *********/

    //********* Client style start *********/
    subRoot: {
      flexGrow: 1,
    },
    topContainerRoot: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
    },
    navigationTopContainerRoot: {
      padding: "0.5rem",
    },
    subTitle: {
      textAlign: "left",
      fontSize: globalFontSize.size1,
      fontWeight: 700,
      color: " #707070",
    },
    iconClasses: {
      color: "#707070",
      width: "2rem",
      height: "2rem",
    },
    backNavigation: {
      color: "#fff",
      cursor: "pointer",
    },
    clientName: {
      color: "#4D4F5C",
      fontSize: "1rem",
      marginBottom: "2rem",
    },
    avatarName: {
      color: "#4D4F5C",
      fontSize: globalFontSize.size4,
      fontWeight: "700",
      margin: "0rem 0.5rem",
      alignSelf: "center",
    },
    btn: {
      backgroundColor: "#f4f4f4",
      color: "#707070",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#f4f4f4",
      },
    },
    btnNormal: {
      backgroundColor: "#fff",
      color: "#707070",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#f4f4f4",
      },
    },
    btnActive: {
      backgroundColor: "#4c79a2",
      color: "#FFFFFF",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#4c79a2",
      },
    },
    btnRedirect: {
      backgroundColor: "#02F0C7",
      color: "#FFFFFF",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#02F0C7",
      },
    },
    Summaryroot: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
      height: "100%",
      justifyContent: "center",
      display: "flex",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.up("md")]: {},

      [theme.breakpoints.up("lg")]: {
        paddingTop: "5rem",
      },
    },
    bothSummaryroot: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
      height: "100%",
      justifyContent: "center",
      display: "flex",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.up("md")]: {},

      [theme.breakpoints.up("lg")]: {
        // paddingTop: "5rem",
      },
    },
    summaryDetailsGrid: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    summaryTitle: {
      fontSize: globalFontSize.size3,
      color: "#707070",
      textAlign: "center",
    },
    chartAmountTitle: {
      fontSize: globalFontSize.size4,
      color: "#707070",
    },
    chartAmount: {
      fontSize: globalFontSize.size2,
      color: "#4e4e59",
      fontWeight: "650",
    },

    summaryAmount: {
      fontSize: globalFontSize.size2,
      textAlign: "center",
      color: "#4e4e59",
      fontWeight: "700",
    },
    bothSummaryAmount: {
      fontSize: globalFontSize.size3,
      textAlign: "center",
      color: "#4e4e59",
      fontWeight: "700",
    },
    pieChartroot: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
      height: "100%",
      justifyContent: "center",
      display: "flex",
    },

    assetsGraphTitle: {
      fontSize: globalFontSize.size3,
      color: "#7f7f85",
      fontWeight: "650",
      marginLeft: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    tableDetailsTitle: {
      fontSize: globalFontSize.size3,
      color: "#7f7f85",
      fontWeight: "650",
      textAlign: "center",
    },
    tableDetailsTitleWithMargin: {
      fontSize: globalFontSize.size3,
      color: "#7f7f85",
      fontWeight: "650",
      marginLeft: "2.5rem",
    },

    detailsroot: {
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
      height: "100%",
    },
    moreBtn: {
      backgroundColor: "#51565c",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      padding: "0.2rem 0.5rem 0.2rem 0.5rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#51565c",
      },
    },
    AddAssetsButton: {
      backgroundColor: "#a8e289",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#a8e289",
      },
    },
    redColorButton: {
      backgroundColor: "#f8767d",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#f8767d",
      },
    },
    cTraaumaButton: {
      backgroundColor: "#a8e289",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      margin: "auto",
      textAlign: "center",
      padding: "0.2rem 0rem",
      fontSize: globalFontSize.size4,
      [theme.breakpoints.down("sm")]: {},
      "&:hover": {
        backgroundColor: "#a8e289",
      },
    },

    cDeleteButton: {
      backgroundColor: "#f8767d",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      margin: "auto",
      textAlign: "center",
      padding: "0.2rem 0rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#f8767d",
      },
    },
    cLifeButton: {
      backgroundColor: "#58f0c7",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      margin: "auto",
      textAlign: "center",
      padding: "0.2rem 0rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#58f0c7",
      },
    },
    cIPButton: {
      backgroundColor: "#aba8aa",
      color: "#FFFFFF",
      textTransform: "none",
      borderRadius: "0.3rem",
      marginRight: "0.5rem",
      margin: "auto",
      textAlign: "center",
      padding: "0.2rem 0rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        backgroundColor: "#aba8aa",
      },
    },
    AddAssetsButton2: {
      backgroundColor: "#ffff",
      color: "#707070",
      textTransform: "none",
      borderRadius: "0.5rem",
      borderStyle: "dashed",
      borderColor: "#707070",
      fontSize: globalFontSize.size3,
      borderWidth: "1px",
      padding: "0.5rem 1rem",
      // marginLeft: "7%",
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
    addNewDetailsButton: {
      backgroundColor: "#f4f4f4",
      color: "#000",
      textTransform: "none",
      borderRadius: "0.5rem",
      borderStyle: "dashed",
      borderColor: "#707070",
      fontSize: globalFontSize.size3,
      borderWidth: "1px",
      display: "flex ",
      flexDirection: "column",
      padding: "1rem",

      alignItems: "center",
    },
    addCircleIcon: {
      color: "#707070",
      marginRight: "0.4rem",
    },
    addDetailsTilet: {
      fontSize: "0.8rem",
      margin: "0.4rem",
    },
    assetsList: {
      color: "#4e4e59",
      fontSize: globalFontSize.size4,
      margin: "0.5rem 1.3rem",
    },
    typeofAssetsClass: {
      color: "#000",
      fontSize: globalFontSize.size3,
      margin: "2rem 1.3rem 0.5rem 1.3rem",
      fontWeight: "650",
      cursor: "pointer",
    },
    subTypeofAsstsClass: {
      color: "#4e4e59",
      fontSize: globalFontSize.size4,
      margin: "0.5rem 1.3rem 0.5rem 4rem",
    },
    totalAssetsClass: {
      color: "#000",
      fontSize: globalFontSize.size4,
      margin: "0.5rem 1.3rem 0.5rem 4rem",
      fontWeight: "600",
    },
    totalAssetsCostClass: {
      color: "#000",
      fontSize: globalFontSize.size4,
      margin: "0.5rem 1.3rem",
      fontWeight: "600",
    },
    totalAssets: {
      color: "#000",
      fontSize: globalFontSize.size2,
      fontWeight: "700",
      margin: "0.5rem -0.8rem 0.5rem 0rem",
    },

    dialogPaper: {
      borderRadius: "1.2rem",
      overflow: "hidden",
      padding: "5rem",
    },
    dialogTitle: {
      color: "#4e4e59",
      fontSize: globalFontSize.size2,
    },
    expensesList: {
      color: "#4e4e59",
      fontSize: globalFontSize.size3,
      margin: "0.5rem 0rem",
    },
    ExpensesSummaryTitle: {
      fontSize: globalFontSize.size3,
      //1.2
      color: "#707070",
    },
    ExpensesSummaryAmount: {
      fontSize: globalFontSize.size2,
      fontWeight: "700",
      color: "#4e4e59",
    },

    addLiabilityGrid: {
      backgroundColor: "#eeeeee",
      borderRadius: "1.2rem",
      margin: "1rem",
      borderStyle: "dashed",
      borderColor: "#707070",
      borderWidth: "1px",
    },
    addLiabilityIcon: {
      fontSize: "2.25rem",
    },
    addLiabilityTitle: {
      fontSize: globalFontSize.size3,
      color: "#707070",
      fontWeight: "650",
      padding: "1rem",
    },

    square: {
      height: "10px",
      width: "20px",
      borderRadius: "5px 0px 5px 0px",
      display: "inline-block",
      marginRight: "1rem",
      textAlign: "left",
    },
    summarySquare: {
      height: "8px",
      width: "18px",
      borderRadius: "5px 0px 5px 0px",
      marginRight: "1rem",
      marginTop: "0.2rem",
    },
    priceTitle: {
      fontSize: globalFontSize.size4,
      fontWeight: 650,
      color: " #707070",
      textAlign: "center",
    },
    amountClass: {
      fontSize: globalFontSize.size3,
      fontWeight: 400,
      color: " #000",
    },
    backToDashboard: {
      background: "-webkit-linear-gradient(to right, #43cea2, #185a9d)",
      background: "linear-gradient(to right, #43cea2, #185a9d)",
      borderRadius: "0.5rem",
      margin: "2rem",
      cursor: "pointer",
    },
    simpleBudgetDeails1: {
      fontSize: globalFontSize.size2,
      color: "#fff",
    },
    simpleBudgetDeails2: {
      fontSize: globalFontSize.size4,
      margin: "0.5rem",
      color: "#fff",
    },
    tableAvatar: {
      // marginRight: "1.5rem",
    },
    tooltipBack: {
      backgroundColor: "#5ba4cf",
      width: "15rem",
    },
    tooltipLike: {
      fontSize: globalFontSize.size3,
      margin: "0rem 0.3rem",
    },
    tooltipLikeButton: {
      fontSize: globalFontSize.size2,
      cursor: "pointer",
    },
    tooltipHomeIcon: {
      fontSize: globalFontSize.size2,
    },
    tooltipEditIcon: {
      fontSize: globalFontSize.size2,
      opacity: "0.5",
    },
    formText01: {
      color: "#605D5D",
      fontWeight: "600",
      fontSize: "0.8rem",
    },
    formText02: {
      color: "#707070",
      fontWeight: "600",
      fontSize: "0.8rem",
    },
    formText03: {
      color: "#605D5D",
      fontWeight: "600",
      fontSize: "0.7rem",
    },
    formText04: {
      color: "#707070",
      fontWeight: "600",
      fontSize: "0.7rem",
    },
    containedButtonForm: {
      backgroundColor: "#707070",
      color: "#FFF",
      borderRadius: "2rem",
      fontSize: "0.9rem",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      },
      textTransform: "capitalize",
      padding: "0.3rem 1.8rem",
      margin: "2rem 0",
    },
    ClientListTitle: {
      fontSize: "1.5rem",
      fontWeight: "550",
    },
    starIconOffmode: {
      color: "#FDED34",
    },
    clListName: {
      color: "#000",
    },
    clientGrade: {
      marginRight: "1rem",
      backgroundColor: "#fff",
      color: "green",
      //    paddding: "2rem",
      borderRadius: "3rem",
      width: "1.5rem",
    },
    clientGradeButton: {
      background: "-webkit-linear-gradient(to right, #dce35b, #45b649)",
      background: "linear-gradient(to right, #dce35b, #45b649)",
      color: "#FFFFFF",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size4,
      "&:hover": {
        background: "-webkit-linear-gradient(to right, #dce35b, #45b649)",
        background: "linear-gradient(to right, #dce35b, #45b649)",
        backgroundColor: "#4c79a2",
      },
    },
    clientGradeButtonHorizontalList: {
      background: "-webkit-linear-gradient(to right, #dce35b, #45b649)",
      background: "linear-gradient(to right, #dce35b, #45b649)",
      color: "#FFFFFF",
      textTransform: "none",
      margin: "0rem 0.2rem",

      fontSize: globalFontSize.size4,
      "&:hover": {
        background: "-webkit-linear-gradient(to right, #dce35b, #45b649)",
        background: "linear-gradient(to right, #dce35b, #45b649)",
        backgroundColor: "#4c79a2",
      },
    },
    clientListMenu: {
      color: "#707070",
      fontSize: "2rem",
      cursor: "pointer",
    },
    clientNameTooltip: {
      fontSize: globalFontSize.size3,
      fontWeight: "600",
    },
    tooltipIcons: {
      fontSize: globalFontSize.size4,
      marginRight: "0.5rem",
    },
    clientdetailsTooltip: {
      fontSize: globalFontSize.size4,
    },
    clientListhorizontal: {
      boxShadow: "0px 3px 6px #00000029",
      borderRadius: "1rem",
      padding: "1rem 0.5rem",
      marginBottom: "1rem",
      //  width: "32%",
    },
    moreVertIconClientList: {
      marginTop: "-1.3rem",
      marginRight: "-1rem",
      color: "#707070",
    },
    fileNoteCardText: {
      fontSize: globalFontSize.size4,
      opacity: "0.8",
    },
    clientSmallText: {
      fontSize: globalFontSize.size5,
      opacity: "0.8",
    },
    clientFileKanbanCard: {
      backgroundColor: "#fff",
      width: "270px",
      padding: "0.5rem",
      margin: "1rem 0rem",
      borderRadius: "0.5rem",
      boxShadow: "0px 3px 6px #00000029",
    },
    kanbanCardTitle: {
      fontSize: globalFontSize.size2,
      color: "#858585",
    },
    kanbanCardText: {
      fontSize: globalFontSize.size4,
      color: "#000",
    },
    editTimeCard: {
      color: "#707070",
      fontSize: globalFontSize.size4,
      marginRight: "0.5rem",
    },
    kanbanColoumHeading: {
      background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
      color: "#fff",
      boxShadow: "0px 3px 6px #00000029",
      width: "275px",
      textAlign: "center",
    },
    addCardKanbanBoard: {
      backgroundColor: "#ffff",
      color: "#707070",
      textTransform: "none",
      borderRadius: "0.5rem",
      borderStyle: "dashed",
      borderColor: "#707070",
      fontSize: globalFontSize.size3,
      borderWidth: "1px",
      padding: "0.5rem 1rem",
      marginTop: "1.5rem",
      height: "8rem",

      "&:hover": {
        backgroundColor: "#fff",
      },
    },
    cardActionButton: {
      marginLeft: "103%",
      width: "110px",
      fontSize: 12,
      padding: "0.3rem 0rem 0.3rem 0",
      textTransform: "none",
      borderRadius: "0rem 0.3rem 0.3rem 0rem",
      color: "#fff",
    },
    //formik input start
    newFormTopBackgound: {
      background: " linear-gradient(to right, #00b09b, #96c93d)",
      color: "#fff",
    },
    newFormBottomBackgound: {
      background: " linear-gradient(to right, #00b09b, #96c93d)",
      color: "#fff",
      height: "4rem",
      width: "100%",
    },
    newFormBottomLogo: {
      width: "6rem",
      height: "2.5rem",
      float: "left",
      textAlign: "center",
      margin: "0.5rem",
    },
    inputField: {
      borderRadius: "0.6rem",
      padding: "0.4rem",
      borderColor: "#707070",
      // borderTopColor: "#AFACAC",
      // borderBottomColor: "#595555",
      marginTop: "0.5rem",
      borderWidth: "1px",
      width: "100%",
      "&:focus": {
        borderRadius: "0.6rem",
        borderWidth: "1.2px",
        outline: "none",
      },
    },
    inputLableFormik: {
      fontSize: "0.8rem",
      color: "#605D5D",
      fontWeight: "600",
    },
    errorMassage: {
      color: "red",
    },

    //********* Client style end *********/
    detailsrootSecondOption: {
      backgroundColor: "#f4f5f7",
      padding: "1rem",
      borderRadius: "1rem",
      boxShadow: "0px 3px 6px #00000029",
      height: "100%",
    },
    composeBtn: {
      backgroundColor: golabalColors.green1,
      color: "#FFFFFF",
      textTransform: "none",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: globalFontSize.size3,
      "&:hover": {
        backgroundColor: golabalColors.green1,
      },
    },
    activeMailType: {
      backgroundColor: "#fff",
      cursor: "pointer",
    },
    nonActiveMailType: {
      cursor: "pointer",
    },

    mailType: {
      fontWeight: "600",
      margin: "0rem 0.5rem",
      color: golabalColors.black02,
    },
    mailNewMessageNotification: {
      fontSize: globalFontSize.size4,
      color: "#fff",
      backgroundColor: golabalColors.newGreen,
      padding: "0.1rem 0.2rem",
      borderRadius: "0.2rem",
    },
    mailTypeIcon: {
      color: golabalColors.ash02,
    },
    mailTagName: {
      backgroundColor: "#ecedef",
      padding: "0rem 0.5rem",
    },
    otherMailIcon: {
      color: golabalColors.black02,
      cursor: "pointer",
    },
    formInputField: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 10,
      width: "100%",
      height: "2.6rem",
      "&:focus": {
        outline: "none",
      },
    },
    formInputLabel: {
      color: "#000",
    },
    temparyBtn: {
      background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
      margin: "0.5rem",
    },

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
    profileImg: {
      width: "25rem",
      height: "15rem",
      margin: "2rem",
      borderRadius: "1rem",
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
    itrmListClass1: {
      backgroundColor: "#F9E79F",
    },
    itrmListClass2: {
      backgroundColor: "#F7DC6F",
    },
    cardClass: {
      boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
      width: "100%",
      "&:hover": {
        boxShadow: " 0px 50px 100px -10px rgba(0, 0, 0, 0.4",
      },
    },
  }));

  const classes = useStyles();

  if (localStorage.getItem("session2")) {
    return (
      <div className="main-container2">
        <div
          className={classes.root}
          //********************************************** */
          // style={{
          //   backgroundColor: dark
          //     ? DARK_BODY_BACKGROUND
          //     : LIGHT_BODY_BACKGROUND,
          // }}
        >
          <CssBaseline />

          {/* <img
              className={classes.background}
              alt="background"
              src={dark ? DarkBackground : Background}
            /> */}

          <AppTopBar
            classes={classes}
            handleDrawerOpen={handleDrawerOpen}
            handleNotification={handleNotification}
            open={open}
            gloableShortCutOpen={gloableShortCutOpen}
            handleClickAway={handleClickAway}
          />

          <AppDrawer
            classes={classes}
            active={active}
            handleClick={handleClick}
            handleDrawerClose={handleDrawerClose}
            logout={logout}
            open={open}
            privateMode={privateMode}
            setActive={setActive}
            setPrivateMode={setPrivateMode}
            subOpen={subOpen}
          />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div maxWidth="lg" className={classes.container}>
              <Switch>
                <Route
                  path="/dashboard/adduser"
                  render={(props) => (
                    <AddUser
                      {...props}
                      // open={open}
                      // privateMode={privateMode}
                      classes={classes}
                      // listText={ListText}
                    />
                  )}
                />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}
