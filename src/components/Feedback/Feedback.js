import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import './Feedback.css';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    persentage: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const {id, good, neutral, bad} = this.props;

  handleIncrement = e => {
    this.setState(state => ({
      [e.target.name]: state[e.target.name] + 1,
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
      <div className="Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleIncrement} />

        <p>Statistics</p>
        <ul className="Statistics__list">
          <li className="Statistics__item__good">Good: {this.state.good}</li>
          <li className="Statistics__item__neutral">Neutral: {this.state.neutral}</li>
          <li className="Statistics__item__bad">Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

// const Feedback = () => {
//   <div>
//     <p>Please leave feedback</p>
//     <ul class="list filters__list">
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Good
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Neutral
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Bad
//         </button>{' '}
//       </li>
//     </ul>
//     <p>Statistics</p>
//     <ul class="list filters__list">
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Good: 3
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Neutral: 2
//         </button>{' '}
//       </li>
//       <li class="filters__item">
//         <button class="filters__btn" type="button">
//           Bad: 2
//         </button>{' '}
//       </li>
//     </ul>
//   </div>;
// };
export default Feedback;
