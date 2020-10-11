<<<<<<< HEAD
import React from "react";
import ThemeFeedbackDialog from "gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog";
=======
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaceWink20 } from '@carbon/icons-react';
>>>>>>> main

const FeedbackDialog = ({ props }) => {
  const onSubmit = data => {
    console.log({ ...data });
  };

<<<<<<< HEAD
  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
=======
const FeedbackDialog = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);

  return onSubmit ? (
    <>
      <Form onSubmit={onSubmit} setVisible={setVisible} visible={visible} />
      <LaunchButton
        visible={visible}
        icon={FaceWink20}
        onClick={() => setVisible(!visible)}
      />
    </>
  ) : null;
};

FeedbackDialog.propTypes = {
  onSubmit: PropTypes.func,
>>>>>>> main
};

export default FeedbackDialog;
