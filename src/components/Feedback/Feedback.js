import React from 'react';
// import PropTypes from 'prop-types';
import './Feedback.css';

class Feedback extends React.Component {
  // const {good, neutral, bad} = this.props;
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    // good: propTypes.number.isRequired,
    // bad: this.propTypes.number.isRequired,
    // neutral: this.propTypes.number.isRequired,
    // total: this.propTypes.number.isRequired,
    // persentage: this.propTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     [this.state.name]: prevState[this.state.name] + 1,
  //   }));
  // };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  // countTotalFeedback = () => {
  //   this.setState((state, props) => ({
  //     value: state.value + props.value => {
  //     console.log({'Total: {}'})}
  //   }));
  // };

  render() {
    return (
      <div class="Feedback">
        <ul class="Feedback__list">
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrementGood}>
              Good
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrementNeutral}>
              Neutral
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrementBad}>
              Bad
            </button>
          </li>
        </ul>
        <p>Statistics</p>
        <ul class="Statistics__list">
          <li class="Statistics__item__good">Good: {this.state.good}</li>
          <li class="Statistics__item__neutral">Neutral: {this.state.neutral}</li>
          <li class="Statistics__item__bad">Bad: {this.state.bad}</li>
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
