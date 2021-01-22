import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';

const SignUpModal = (props) => {
  const { createUser, children, openPopup, handleClose } = props;
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>Sign Up for Fresh Fridge!</div>
      </DialogTitle>
      <DialogContent dividers>
        {/* {children} */}
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name..."
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username..."
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password..."
          type="password"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="confirmPass"
          label="Confirm password..."
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Sign Up!
        </Button>
        <Button onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
