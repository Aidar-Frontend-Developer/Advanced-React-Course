import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import ErrorField from '../../common/ErrorField';

class SignUpForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<Field name="email" component={ErrorField} />
					<Field name="password" component={ErrorField} type="password" />

					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		);
	}
}

const validate = ({ email, password }) => {
	const errors = {};
	if (!email) errors.email = 'Email is required';
	else if (!emailValidator.validate(email)) errors.email = 'Email is invalid';

	if (!password) errors.password = 'Password is required';
	else if (password.length < 8) errors.password = 'Password is too short';
	return errors;
};

export default reduxForm({
	form: 'auth',
	validate,
})(SignUpForm);
