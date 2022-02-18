import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {children}
    </Wrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
