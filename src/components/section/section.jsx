import PropTypes from 'prop-types';
import { SectionTitle } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </div>
  );
};

Section.propTypes = {
    title: PropTypes.string,
};