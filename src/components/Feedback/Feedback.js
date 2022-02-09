import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import './Feedback.css';

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

  // handleIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       name: prevState.name + 1,
  //     };
  //   });
  // };

  // handleIncrementGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = (good * 100) / this.countTotalFeedback();
    return percentage;
  };
  // countTotalFeedback = () => {
  //   this.setState((state, props) => ({
  //     value: state.value + props.value => {
  //     console.log({'Total: {}'})}
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={options} onLeaveFeedback={this.handleIncrement} />
        <Section title="Statistic">
          <div>
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
          </div>
        </Section>
      </div>
    );
  }
}

export default Feedback;
