import React from 'react';
import Exception from '@/components/Exception';
import user from '@/utils/user';

const Auth = ({ children, authorities = [] }) => {
  const userInfo = user.getUserInfo();
  if (userInfo) {
    const authority = userInfo.userType;
    if (authorities && authorities.length > 0 && authorities.indexOf(authority) === -1) {
      return (
        <Exception
          statusCode="403"
          image="https://img.alicdn.com/tfs/TB174TvGCzqK1RjSZPcXXbTepXa-260-260.png"
          description="抱歉，你没有权限访问该页面"
        />
      );
    }

    return children;
  }

  return null;
};

const withAuth = params => WrapperedComponent => props => (
  <Auth {...params}>
    <WrapperedComponent {...props} />
  </Auth>
);

export { withAuth };

export default Auth;
