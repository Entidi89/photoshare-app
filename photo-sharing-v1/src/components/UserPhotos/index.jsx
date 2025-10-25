import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import "./styles.css";
import models from "../../modelData/models";


function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!photos || photos.length === 0) {
    return <Typography variant="body1">No photos found for this user.</Typography>;
  }

  return (
    <div className="photo-container">
      <Typography variant="h5" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>

      <div className="photo-list">
        {photos.map((photo) => {
        
          let photoSrc;
          try {
            photoSrc = require(`../../images/${photo.file_name}`);
          } catch (e) {
            console.warn(`Cannot load image ${photo.file_name}`);
            photoSrc = ""; 
          }

          return (
            <Card key={photo._id} className="photo-card">
              <CardContent>
                <img
                  src={photoSrc}
                  alt={photo.file_name}
                  className="photo-img"
                />

                <Typography variant="body2" color="textSecondary">
                  Posted on: {new Date(photo.date_time).toLocaleString()}
                </Typography>

                <Divider sx={{ my: 1 }} />

               
                {photo.comments && photo.comments.length > 0 ? (
                  photo.comments.map((comment) => (
                    <div key={comment._id} className="photo-comment">
                      <Typography variant="body2">
                        <Link to={`/users/${comment.user._id}`}>
                          {comment.user.first_name} {comment.user.last_name}
                        </Link>{" "}
                        — {new Date(comment.date_time).toLocaleString()}
                      </Typography>
                      <Typography variant="body1">{comment.comment}</Typography>
                      <Divider sx={{ my: 1 }} />
                    </div>
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No comments yet.
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default UserPhotos;
