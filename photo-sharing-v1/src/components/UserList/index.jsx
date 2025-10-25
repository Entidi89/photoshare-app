import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";


function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        User List
      </Typography>

      <List component="nav">
        {users.map((user, index) => (
          <React.Fragment key={user._id}>
            <ListItem
              button
              component={Link}
              to={`/users/${user._id}`}
            >
              <ListItemText
                primary={`${user.first_name} ${user.last_name}`}
                secondary={user.occupation}
              />
            </ListItem>
            {index !== users.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
