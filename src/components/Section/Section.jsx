import PropTypes from 'prop-types';
import { Title } from 'components/App/App.styled'; 

export const Section = ({ title, children }) => {
	return (
		<>
			<Title>{title}</Title>
			{children}
		</>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};