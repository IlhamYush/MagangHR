import React, { useEffect, useRef } from 'react';
import { Modal, Backdrop, Fade, Typography } from '@material-ui/core';

import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import checkmarkAnimation from 'assets/animations/checkmark_blue.json';
import modalStyle from 'assets/jss/material-dashboard-react/components/modalStyle.js';

function SuccessModal({ open, onClose, message, title, onAnimationComplete }) {
  const classes = modalStyle();
  const animationContainer = useRef(null);

  useEffect(() => {
    let anim;

    if (open) {
      const timer = setTimeout(() => {
        if (animationContainer.current) {
          anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: checkmarkAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid meet',
              progressiveLoad: true,
            },
          });

          anim.addEventListener('complete', () => {
            console.log('animation completed');
            setTimeout(() => {
              onAnimationComplete(); // Redirect setelah 1 detik
            }, 1000); // 1 Detik Delay
          });
          // return () => anim.destroy();
          return () => {
            if (anim) {
              anim.removeEventListener('complete', onAnimationComplete);
              anim.destory();
            }
          };
        } else {
          console.error('Animation container is not available');
        }
      }, 200); // Delay 200ms or more
      // return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [open, onAnimationComplete]);

  const setAnimationContainerRef = (element) => {
    animationContainer.current = element;
    if (element && open) {
      console.log('Animation started');
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <div
            ref={setAnimationContainerRef}
            style={{ width: 300, height: 300, margin: 'auto' }}
          />
          <Typography variant="body1" gutterBottom>
            {message}
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
}

SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired, // Gantilah sesuai tipe data yang relevan
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  title: PropTypes.string,
  onAnimationComplete: PropTypes.func,
};

export default SuccessModal;
