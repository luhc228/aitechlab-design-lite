import React from 'react';
import Exception from '@/components/Exception';

const NotFound = () => {
  return (
    <Exception
      statusCode="404"
      image="https://img.alicdn.com/tfs/TB1BJ_3GxTpK1RjSZFKXXa2wXXa-260-260.png"
      description="找不到该页面"
    />
  );
};

export default NotFound;
