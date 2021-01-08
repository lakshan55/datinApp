

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
        category={"GENERAL"}
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
        linkPath={DASHBOARD}
        selectButton={DASHBOARD}
        drawerIcon={
          <DashboardIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={CLIENTS}
        selectButton={CLIENTS}
        drawerIcon={
          <PeopleIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={LEADS}
        selectButton={LEADS}
        drawerIcon={
          <AccountBox style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />
    </>
  );

  /**
   * Secondary item list on the drawer
   */
  const secondaryListItems = (
    <div className={dClasses.mainList}>
      <MainCategory
        open={open}
        handleMainCategory={elementhandleExpandClick}
        category={"ELEMENTS"}
        expandedState={elmentExpanded}
      />
      <Collapse in={elmentExpanded} timeout={500} unmountOnExit>
        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Tasks"}
          linkPath={TASKS}
          selectButton={TASKS}
          drawerIcon={<AlarmIcon style={{ color: "#E3E9EF" }} />}
        />

        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Insights"}
          linkPath={INSIGHTS}
          selectButton={INSIGHTS}
          drawerIcon={<Highlight style={{ color: "#E3E9EF" }} />}
        />

        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Modeling"}
          linkPath={MODELING}
          selectButton={MODELING}
          drawerIcon={<TrendingIcon style={{ color: "#E3E9EF" }} />}
        />

        <ListItem
          onClick={templateExpanClick}
          className={
            open && active === TEMPLATES
              ? classes.activeListItem
              : open
              ? templateExpanded
                ? classes.listItemCollapse
                : classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <EventNoteIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>{" "}
          {templateExpanded ? (
            <ExpandLessIcon className={dClasses.mainListIcon} />
          ) : (
            <ExpandMoreIcon className={dClasses.mainListIcon} />
          )}
          <ListItemText primary="Templates" />
        </ListItem>
        <Collapse
          className={classes.subListCollapse}
          in={templateExpanded}
          timeout="auto"
          unmountOnExit
        >
          {
            // This is sub Components of temmplate
          }
          <div style={{ marginTop: "35px" }}>
         
            <ListItem
              component={ReactLink}
              to={"loka"}
              onClick={() => setActive(DOCUMENTS)}
              className={
                open && active === DOCUMENTS
                  ? classes.activeListSubItem
                  : open
                  ? classes.subItemComponents
                  : classes.closedListItem
              }
              button
            >
              <ListItemIcon>
                <FolderIcon style={{ color: "#E3E9EF" }} />
              </ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItem>

            <ListItem
              component={ReactLink}
              to={WORKFLOWS}
              onClick={() => setActive(WORKFLOWS)}
              className={
                open && active === WORKFLOWS
                  ? classes.activeListSubItem
                  : open
                  ? classes.subItemComponents
                  : classes.closedListItem
              }
              button
            >
              <ListItemIcon>
                <TimelineIcon style={{ color: "#E3E9EF" }} />
              </ListItemIcon>
              <ListItemText primary="Workflows" />
            </ListItem>
          </div>
          {
            // This is sub Components of temmplate end
          }
        </Collapse>

        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Uploads"}
          linkPath={UPLOADS}
          selectButton={UPLOADS}
          drawerIcon={<PublishIcon style={{ color: "#E3E9EF" }} />}
        />
      </Collapse>
    </div>
  );

  // drawer close  mainListItemsClose

  const secondaryListItemsClose = (
    <>
      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={TASKS}
        selectButton={TASKS}
        drawerIcon={
          <AlarmIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={INSIGHTS}
        selectButton={INSIGHTS}
        drawerIcon={
          <Highlight style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={MODELING}
        selectButton={MODELING}
        drawerIcon={
          <TrendingIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={TEMPLATES}
        selectButton={TEMPLATES}
        drawerIcon={
          <EventNoteIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={UPLOADS}
        selectButton={UPLOADS}
        drawerIcon={
          <PublishIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />
    </>
  );

  // third item list on the drawer

  const thirdaryListItems = (
    <div className={dClasses.mainList}>
      <MainCategory
        open={open}
        handleMainCategory={NotifihandleExpandClick}
        category={"NOTIFICATIONS"}
        expandedState={notifiExpanded}
      />
      <Collapse in={notifiExpanded} timeout={500} unmountOnExit>
        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Email"}
          linkPath={"/main/emails"}
          selectButton={EMAIL}
          drawerIcon={<MailOutlineIcon style={{ color: "#E3E9EF" }} />}
        />

        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Chat"}
          linkPath={CHAT}
          selectButton={CHAT}
          drawerIcon={<Highlight style={{ color: "#E3E9EF" }} />}
        />
      </Collapse>
    </div>
  );

  // drawer close  mainListItemsClose

  const thirdaryListItemsClose = (
    <>
      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={EMAIL}
        selectButton={EMAIL}
        drawerIcon={
          <MailOutlineIcon
            style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }}
          />
        }
      />

      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={CHAT}
        selectButton={CHAT}
        drawerIcon={
          <Highlight style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        }
      />
    </>
  );

  // forth item list on the drawer

  const fortharyListItems = (
    <div className={dClasses.mainList}>
      <MainCategory
        open={open}
        handleMainCategory={collapshandleExpandClick}
        category={"EXTRAS"}
        expandedState={collapsExpanded}
      />

      <Collapse in={collapsExpanded} timeout={500} unmountOnExit>
        <SubCategory
          classes={classes}
          open={open}
          active={active}
          setActive={setActive}
          subTitle={"Maps"}
          linkPath={MAPS}
          selectButton={MAPS}
          drawerIcon={<MapIcon style={{ color: "#E3E9EF" }} />}
        />

        {
          //templates collapse
        }
      </Collapse>
    </div>
  );

  const fortharyListItemsClose = (
    <>
      <SubCategoryClose
        classes={classes}
        open={open}
        active={active}
        setActive={setActive}
        linkPath={MAPS}
        selectButton={MAPS}
        drawerIcon={
          <MapIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
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
        <div className={classes.profile} hidden={!open}>
          <Avatar alt={"name"} src={Profile} className={classes.bigAvatar} />
        </div>
        {open ? (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
            }}
          />
        ) : (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
              width: "2.5rem",
            }}
          />
        )}

        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? mainListItems : mainListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? secondaryListItems : secondaryListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? thirdaryListItems : thirdaryListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? fortharyListItems : fortharyListItemsClose}
        </List>
        <List
          hidden={!open}
          style={{
            margin: "0.5rem 0.4rem 0.5rem 1.4rem",
            borderRadius: "1rem 0 1rem 0",
            width: "15.7rem",
          }}
        >
          <ListItem
            className={open ? classes.listItem : classes.closedListItem}
            style={{
              marginBottom: 0,
              borderRadius: subOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
            }}
            button
            onClick={handleClick}
          >
            <ListItemIcon>
              <Tune style={{ color: "#E3E9EF" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {subOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={subOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                className={
                  open ? classes.subListItem : classes.closedSubListItem
                }
                button
              >
                <ListItemText primary="Dark Mode" />
                <ListItemSecondaryAction></ListItemSecondaryAction>
              </ListItem>
              <ListItem
                className={
                  open ? classes.subListItemEnd : classes.closedSubListItem
                }
                button
              >
                <ListItemText primary="Private Mode" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={privateMode}
                    color="primary"
                    onChange={() => setPrivateMode(!privateMode)}
                    value="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>
        </List>
        {open ? (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
            }}
          />
        ) : (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
              width: "2.5rem",
            }}
          />
        )}
        <List
          style={{
            margin: "3rem 0.5rem 0.5rem 4rem",
            borderRadius: "1rem 0 1rem 0",
          }}
        >
          <ListItem
              onClick={() =>{
localStorage.removeItem("session2"); history.push("dashboard/adduser")
              } }
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
