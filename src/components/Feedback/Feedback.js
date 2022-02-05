import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
  // const {good, neutral, bad} = this.props;
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //дописати прототипи
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div class="Feedback">
        <ul class="Feedback__list">
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrement}>
              Good
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrement}>
              Neutral
            </button>
          </li>
          <li class="Feedback__item">
            <button class="Feedback__btn" type="button" onClick={this.handleIncrement}>
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
