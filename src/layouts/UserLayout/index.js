import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@icedesign/layout';
import Footer from './components/Footer';
import logo from '@/assets/logo.png';
import styles from './index.module.scss';

const UserLayout = ({ children }) => {
  return (
    <Layout className={styles.userLayout}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <h3 className={styles.desc}>TITLE</h3>
      </div>
      {children}
      <Footer />
    </Layout>
  );
};

UserLayout.prototypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
