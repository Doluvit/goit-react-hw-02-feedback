import PropTypes from 'prop-types';

export const Feedback = ({ options, hadleClick }) => {
  return (
    <>
      <ul>
        {options.map((option, index) => {
          const name = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <li key={index}>
              <button type="button" onClick={() => hadleClick(option)}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  hadleClick: PropTypes.func.isRequired,
};
