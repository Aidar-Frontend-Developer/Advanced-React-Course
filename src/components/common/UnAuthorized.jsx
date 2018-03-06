import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UnAuthorized extends Component {
	render() {
		return (
			<div>
				<h2>
					UnAuthorized, please <Link to="/auth/signin">Sign in</Link>
				</h2>
			</div>
		);
	}
}

export default UnAuthorized;
