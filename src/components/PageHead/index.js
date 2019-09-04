import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const PageHead = ({ title, onClick, buttonText }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {buttonText ? (
        <Button type="primary" onClick={onClick}>
          {buttonText}
        </Button>
      ) : null}
    </div>
  )
}

PageHead.defaultProps = {
  buttonText: '',
  onClick: () => { },
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default PageHead;
