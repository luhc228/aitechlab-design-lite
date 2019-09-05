import * as React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const Exception = ({
  statusCode,
  description,
  image,
}) => (
    <IceContainer>
      <div className={styles.exceptionContent}>
        <img src={image} className={styles.exceptionImage} alt="页面不存在" />
        <div className={styles.exceptionPrompt}>
          <h1 className={styles.statusCode}>{statusCode}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </IceContainer>
  );

Exception.defaultProps = {
  statusCode: '400',
  description: '抱歉，你访问的页面不存在',
  image: 'https://img.alicdn.com/tfs/TB1ODH2GAvoK1RjSZPfXXXPKFXa-780-780.png',
};

export default Exception;
