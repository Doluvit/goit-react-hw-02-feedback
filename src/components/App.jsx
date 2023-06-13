import { Feedback } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';
import { MainContainer } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const hadleClick = key => {
    switch (key) {
      case 'good':
        setFeedback({ ...feedback, good: feedback.good + 1 });
        break;
      case 'neutral':
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case 'bad':
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    const sum = Object.values(feedback);
    return sum.reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();
  const percentages = countPositiveFeedbackPercentage(total, feedback.good);

  return (
    <MainContainer>
      <Section title="Please leave feedback">
        <Feedback options={options} hadleClick={hadleClick}></Feedback>
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={percentages}
          />
        )}
      </Section>
    </MainContainer>
  );
};
