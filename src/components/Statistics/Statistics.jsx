import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsList } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <StatisticsList>
        <li>
            <StatisticsItem>Good: {good}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem>Total: {total}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem>Positive Feedback: {positivePercentage}%</StatisticsItem>
        </li>
    </StatisticsList>
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};