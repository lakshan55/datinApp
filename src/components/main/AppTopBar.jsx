/**
 * @author Uvindu Sanjana
 */

import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Badge,
  ClickAwayListener,
  Avatar,
  Backdrop,
  AppBar,
  InputBase,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddCircle from "@material-ui/icons/AddCircleOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreVert from "@material-ui/icons/MoreVertOutlined";
import logo from "../../img/logo.png";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 3,
    top: 1,
    border: "2px solid ",
    padding: "0 4px",
    borderColor: "#ffffff",
    color: "#ffffff",
    backgroundColor:
      "transparent linear-gradient(148deg, #02F0C7 0%, #02F0C7 0%, #02F0C7 17%, #02F0C7 92%, #02F0C7 100%) 0% 0% no-repeat padding-box",
  },
}))(Badge);

const AppTopBar = (props) => {
  const {
    classes,

    handleDrawerOpen,
    handleNotification,

    open,
    gloableShortCutOpen,

    handleClickAway,
  } = props;

  return (
    <React.Fragment>
      <AppBar
        elevation={23}
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon className={classes.appTopMenuButton} />
          </IconButton>

          <div>
            <img
              src={logo}
              style={{ width: "4rem", height: "3rem", marginRight: "3rem" }}
              alt="logo"
            />
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search for…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.notifiactionShortcut}>
            <IconButton
              style={{
                color: "white",
                width: "2rem",
                height: "2rem",
                marginTop: "0rem",
              }}
              className={classes.speedDialIcon}
              onClick={handleNotification}
            >
              <StyledBadge badgeContent={4}>
                <NotificationsIcon style={{ width: "2rem", height: "2rem" }} />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AppTopBar;
