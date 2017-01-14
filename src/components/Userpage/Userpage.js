import React, {PropTypes, Component } from 'react';
import AuthService from '../../utils/AuthService';

import {Button, Jumbotron} from 'react-bootstrap';

export class Userpage extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	static propTypes = {
		auth: PropTypes.instanceOf(AuthService)
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			profile: props.auth.getProfile()
		}

		props.auth.on('profile_updated', (newProfile) => {
			this.setState({profile: newProfile});
		})
	}

	logout() {
		this.props.auth.logout()
		this.context.router.push('/home')
	}

	render() {
		const {profile} = this.state;

		return (

			<Jumbotron>
				<h1>Hello {profile.nickname}</h1>
				<Button id="logout-button" onClick={this.logout.bind(this)}>Logout</Button>
			</Jumbotron>

		);
	}

}; 