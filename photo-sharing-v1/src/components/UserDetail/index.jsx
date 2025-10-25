import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";


function UserDetail() {
  const { userId } = useParams();          
  const user = models.userModel(userId);   

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <div className="user-detail-container">
      <Card className="user-detail-card">
        <CardContent>
         
          <Typography variant="h5" gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>

       
          <Typography variant="subtitle1" color="textSecondary">
            {user.occupation}
          </Typography>

          <Divider sx={{ my: 1 }} />

        
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Location:</strong> {user.location}
          </Typography>

        
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Description:</strong> {user.description}
          </Typography>

          
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/photos/${user._id}`}
            sx={{ mt: 2 }}
          >
            View Photos
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDetail;
