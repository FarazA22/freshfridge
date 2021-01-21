import React from 'react';
import Modal from '@material-ui/core/Modal';

const SignUpModal = (props) => {
  const { handleOpen, open } = props;
  return (
    <>
      <button type="button" onClick={handleOpen}>
        Sign Up Here!
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="sign-up page"
        aria-describedby="sign-up page"
      >
        <h2>Sign Up Here!</h2>
      </Modal>
    </>
  );
};

export default SignUpModal;
