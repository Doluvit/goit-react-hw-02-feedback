import React, { Component } from 'react';
import { Feedback } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleClick = key => {
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state);
    return sum.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentages = this.countPositiveFeedbackPercentage(total, good);

    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={options} hadleClick={this.hadleClick}></Feedback>
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentages}
            />
          )}
        </Section>
      </div>
    );
  }
}
