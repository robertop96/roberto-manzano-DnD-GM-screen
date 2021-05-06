import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return <Loader type="ThreeDots" color="white" height={35} width={35} />;
};

export default Loading;
