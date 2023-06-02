import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsList, StatisticsText } from './statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsText>Good: </StatisticsText>
        <StatisticsText>{good}</StatisticsText>
      </StatisticsItem>
      <li>
        <StatisticsText>Neutral: </StatisticsText>
        <StatisticsText>{neutral}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Bad: </StatisticsText>
        <StatisticsText>{bad}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Total: </StatisticsText>
        <StatisticsText>{total}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Positive feedback: </StatisticsText>
        <StatisticsText>{positivePercentage}%</StatisticsText>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
