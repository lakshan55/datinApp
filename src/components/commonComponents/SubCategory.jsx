import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

function SubCategory(props) {
  const {
    classes,
    open,
    active,
    setActive,
    subTitle,
    linkPath,
    selectButton,
    drawerIcon,
  } = props;
  return (
    <ListItem
      component={ReactLink}
      to={linkPath}
      onClick={() => setActive(selectButton)}
      className={
        open && active === selectButton
          ? classes.activeListItem
          : open
          ? classes.listItem
          : classes.closedListItem
      }
      button
    >
      <ListItemIcon>{drawerIcon}</ListItemIcon>
      <ListItemText primary={subTitle} />
    </ListItem>
  );
}

export default SubCategory;
