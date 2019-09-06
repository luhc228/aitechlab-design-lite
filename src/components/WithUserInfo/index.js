// create HOC
import React from 'react';

const WithUserInfo = WrapperComponent => props => {
  const newProps = {
    ...props,
    userInfo: { name: 'eee' },
  }
  return <WrapperComponent {...newProps} />;
};

export default WithUserInfo;