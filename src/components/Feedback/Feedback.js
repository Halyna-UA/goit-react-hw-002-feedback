import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import { Wrapper } from './Feedback.styled.js';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = (good * 100) / this.countTotalFeedback();
    return percentage.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const onLeaveFeedback = this.handleIncrement;

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Wrapper>
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentage={percentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Wrapper>
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
