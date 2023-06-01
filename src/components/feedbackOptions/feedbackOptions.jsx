import PropTypes from 'prop-types';
import { ButtonItem, ButtonList } from './feedbackOptions.styled';

export const Feedback = ({ options, hadleClick }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, index) => {
          const name = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <li key={index}>
              <ButtonItem type="button" onClick={() => hadleClick(option)}>
                {name}
              </ButtonItem>
            </li>
          );
        })}
      </ButtonList>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  hadleClick: PropTypes.func.isRequired,
};
