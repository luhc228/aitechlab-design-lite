import * as React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from '@alifd/next';
import styles from './index.module.scss';

const ModalButtons = ({
  okText,
  cancelText,
  onCancel,
  loading,
  onOk,
  onSubmit,
}) => {
  return (
    <div className={styles.modalBtnWrap}>
      <Button onClick={onCancel}>{cancelText}</Button>
      {onOk ? (
        <Button type="primary" onClick={onOk} className={styles.submitBtn}>
          {okText}
        </Button>
      ) : (
          <Form.Submit
            className={styles.submitBtn}
            loading={loading}
            htmlType="submit"
            type="primary"
            validate
            onClick={onSubmit}
          >
            {okText}
          </Form.Submit>
        )}
    </div>
  );
};

ModalButtons.defaultProps = {
  okText: '保存',
  cancelText: '取消',
  loading: false,
  onSubmit: () => { },
};

ModalButtons.prototype = {
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  loading: PropTypes.bool,
  onSubmit: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
};

export default ModalButtons;
