import React from 'react';
import { Dialog } from '@material-ui/core';

const SignUpModal = (props) => {
  const { title, children, handleOpen, open } = props;
  return (
    <>
      <button type="button" onClick={handleOpen}>
        Sign Up Here!
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="sign-up page"
        aria-describedby="sign-up page"
      >
        <h2>Sign Up Here!</h2>
      </Dialog>
    </>
  );
};

export default SignUpModal;
