import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Link as ReactLink } from "react-router-dom";
import {
  IconButton,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemSecondaryAction,
  Switch,
  Drawer,
} from "@material-ui/core";

import {
  DASHBOARD,
  CLIENTS,
  LEADS,
  TASKS,
  INSIGHTS,
  MODELING,
  TEMPLATES,
  UPLOADS,
  EMAIL,
  CHAT,
  MAPS,
  DOCUMENTS,
  TEMPLATESEMAIL,
  WORKFLOWS,
} from "../../constants/index";

import Power from "@material-ui/icons/PowerSettingsNewOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MenuIcon from "@material-ui/icons/Menu";
import Tune from "@material-ui/icons/TuneOutlined";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublishIcon from "@material-ui/icons/Publish";
import MapIcon from "@material-ui/icons/Map";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AccountBox from "@material-ui/icons/AccountBox";
import AlarmIcon from "@material-ui/icons/AlarmOutlined";
import Highlight from "@material-ui/icons/HighlightOutlined";
import TrendingIcon from "@material-ui/icons/TrendingUp";
import DraftsIcon from "@material-ui/icons/Drafts";
import FolderIcon from "@material-ui/icons/Folder";
import TimelineIcon from "@material-ui/icons/Timeline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MainCategory from "../commonComponents/MainCategory";
import SubCategory from "../commonComponents/SubCategory";
import SubCategoryClose from "../commonComponents/SubCategoryClose";
import Profile from "../../img/profile.png";
const drawerStyles = makeStyles((theme) => ({
  mainList: {
    margin: "0 0.8rem 0 0.8rem",
  },
  mainListTopic: {
    margin: "0 0rem 0 0.5rem",
    color: "#F6F8FE",
    opacity: "42%",
    fontWeight: "500",
  },
  mainListIcon: {
    position: "absolute",
    right: "0",
    color: "#F6F8FE",
    opacity: "42%",
    cursor: "pointer",
    marginRight: "2rem",
  },
  mainListcategory: {
    borderRadius: "1.2rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#484848",
    },
  },
  MenuIconStyle: {
    color: "#5FDA72",
    "&:hover": {
      color: "#8defce",
    },
  },

  MenuIconStyleOpen: {
    color: "transparent",
  },
}));

const AppDrawer = (props) => {
  const dClasses = drawerStyles();
  const {
    classes,
    open,
    subOpen,
    privateMode,
    handleDrawerClose,

    handleClick,
    setPrivateMode,
    active,
    setActive,
  } = props;

  //Dahsbord list collapse
  const [dashExpanded, setDahsExpanded] = React.useState(false);

  const dashhandleExpandClick = () => {
    setDahsExpanded(!dashExpanded);
    setElmentExpanded(false);
    setNotifiExpanded(false);
    setCollapsExpanded(false);
  };

  //Element list collapse
  const [elmentExpanded, setElmentExpanded] = React.useState(false);

  const elementhandleExpandClick = () => {
    setElmentExpanded(!elmentExpanded);
    setDahsExpanded(false);

    setNotifiExpanded(false);
    setCollapsExpanded(false);
  };

  //NOTIFICATIONS list collapse
  const [notifiExpanded, setNotifiExpanded] = React.useState(false);

  const NotifihandleExpandClick = () => {
    setNotifiExpanded(!notifiExpanded);
    setDahsExpanded(false);
    setElmentExpanded(false);

    setCollapsExpanded(false);
  };

  //Extra list collapse
  const [collapsExpanded, setCollapsExpanded] = React.useState(false);
  const collapshandleExpandClick = () => {
    setCollapsExpanded(!collapsExpanded);
    setNotifiExpanded(false);
    setDahsExpanded(false);
    setElmentExpanded(false);
  };

  // template list collapse
  const [templateExpanded, setTemplateExpanded] = React.useState(false);

  const templateExpanClick = () => {
    setTemplateExpanded(!templateExpanded);
  };

  //  Template sub items collapse state
  const [templateSubListExpanded, setTemplateSubListExpanded] = React.useState(
    false
  );
  let history = useHistory();
  /**
   * MainContainer item list on the drawer
   */
  const mainListItems = (
    <div className={dClasses.mainList}>
      <MainCategory
        open={open}
        handleMainCategory={dashhandleExpandClick}
        category={"Users"}
        expandedState={dashExpanded}
      />
      <Collapse in={dashExpanded} timeout={500} unmountOnExit>
        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Add New User"}
          linkPath={"adduser"}
          selectButton={"adduser"}
          drawerIcon={<DashboardIcon style={{ color: "#E3E9EF" }} />}
        />
      </Collapse>
    </div>
  );
  /*
  drawer close  mainListItemsClose
  */
  const mainListItemsClose = (
    <>
      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={"adduser"}
        selectButton={"adduser"}
        drawerIcon={
          <DashboardIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />
    </>
  );

  return (
    <div className="main-container">
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon
              className={
                open ? dClasses.MenuIconStyle : dClasses.MenuIconStyleOpen
              }
            />
          </IconButton>
        </div>
        {/* <div className={classes.profile} hidden={!open}>
          <Avatar alt={"name"} src={Profile} className={classes.bigAvatar} />
        </div> */}

        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? mainListItems : mainListItemsClose}
        </List>

        <List
          hidden={!open}
          style={{
            margin: "0.5rem 0.4rem 0.5rem 1.4rem",
            borderRadius: "1rem 0 1rem 0",
            width: "15.7rem",
          }}
        ></List>

        <List
          style={{
            margin: "3rem 0.5rem 0.5rem 4rem",
            borderRadius: "1rem 0 1rem 0",
            marginTop: "25rem",
          }}
        >
          <ListItem
            onClick={() => {
              localStorage.removeItem("session2");
              history.push("dashboard/adduser");
            }}
            className={open ? classes.listAction : classes.closedListAction}
            button
          >
            <ListItemIcon>
              <Power
                style={{
                  color: "#E3E9EF",
                  marginRight: "-2rem",
                  marginLeft: "1rem",
                }}
              />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: "-0.3rem" }} primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
