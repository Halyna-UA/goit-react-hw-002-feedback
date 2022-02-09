import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive Feedback: {percentage} %</Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persentage: PropTypes.number.isRequired,
};
export default Statistics;
