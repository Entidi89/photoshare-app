import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";


function TopBar() {
  const location = useLocation();
  const params = useParams();

  let rightText = "Photo Sharing App";


  if (location.pathname.startsWith("/users/") && !location.pathname.startsWith("/photos/")) {
    const user = models.userModel(params.userId);
    if (user) rightText = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(params.userId);
    if (user) rightText = `Photos of ${user.first_name} ${user.last_name}`;
  } else if (location.pathname === "/users") {
    rightText = "User List";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h6" color="inherit">
          Ngo Tien Dung
        </Typography>

        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
