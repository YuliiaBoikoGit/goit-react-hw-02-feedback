import React from 'react';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (event) => {
		const name = event.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};

  countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const total = good + neutral + bad;
		return total;
  };
  
  countPositiveFeedbackPercentage = () => {
		const total = this.countTotalFeedback();
		const { good } = this.state;
    const percentage = (good * 100) / total;
		return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {total === 0
          ? (<Notification message='There is no feedback' />)
          : (
            <Section title='Statistics'>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
				        positivePercentage={positivePercentage}
              /> 
            </Section>
          )}
      </Container>
    );
  };
};
