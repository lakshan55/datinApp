import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { ListItem, ListItemIcon } from "@material-ui/core";

function SubCategoryClose(props) {
  const {
    classes,
    open,
    active,
    setActive,
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
        !open && active === selectButton
          ? classes.activeListItemCloseDrawer
          : null
      }
      button
    >
      <ListItemIcon>{drawerIcon}</ListItemIcon>
    </ListItem>
  );
}

export default SubCategoryClose;
