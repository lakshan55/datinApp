import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardActions } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
function MainCategory(props) {
  const dClasses = drawerStyles();
  const { open, handleMainCategory, category, expandedState } = props;
  return (
    <CardActions
      disableSpacing
      className={dClasses.mainListcategory}
      onClick={handleMainCategory}
    >
      <Typography hidden={!open} className={dClasses.mainListTopic}>
        {category}
      </Typography>
      {expandedState ? (
        <ExpandLessIcon hidden={!open} className={dClasses.mainListIcon} />
      ) : (
        <ExpandMoreIcon className={dClasses.mainListIcon} />
      )}
    </CardActions>
  );
}

export default MainCategory;
