import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
export default Notification;
