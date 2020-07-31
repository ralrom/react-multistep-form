import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./Header.styles";

function Header({ title, description }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
}

export default Header;
