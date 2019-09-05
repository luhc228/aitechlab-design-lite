import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@alifd/next';

const CustomModal = ({
  children,
  title,
  visible,
  setVisible,
}) => (
    <Dialog
      title={title}
      visible={visible}
      footerAlign="center"
      onClose={() => setVisible(false)}
      footer={false}
    >
      {children}
    </Dialog>
  );

CustomModal.prototype = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomModal;
