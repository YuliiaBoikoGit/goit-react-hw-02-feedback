import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { List, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <List>
        {options.map(option => (
            <Btn key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
                {option}
            </Btn>
        ))}
    </List>
};

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};