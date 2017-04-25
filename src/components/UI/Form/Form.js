import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './Column';
import 'materialize-css/bin/materialize';
import update from 'react-addons-update';
// import $ from 'jquery';

import { FeedbackActions } from '../../../actions';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			date: '',
			feedback: ''
		}
	}

	componentDidMount() {
		// Materialize.updateTextFields();

		document.querySelector('#form').addEventListener('keypress', function (e) {
			if (e.keyCode === 13) {
				e.preventDefault();
			}
		});
	};

	componentWillUnmount() {
		document.querySelector('#form').removeEventListener('keypress');
	}

	onChange = (e) => {
		let date = new Date(),
			months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			day = (date.getDay() < 10) ? '0'+date.getDay() : date.getDay(),
			min = (date.getMinutes()< 10) ? '0'+date.getMinutes(): date.getMinutes(),
			time = day+' '+months[date.getMonth()]+' '+date.getHours()+':'+min;

		this.setState({
			[e.target.name]: e.target.value,

			date: time
		});

		console.log(this.state.date);
	};

	onClick = (e) => {
		e.preventDefault();
		let pld = this.state;
		console.log(pld);

		if (this.state.name !== null && this.state.feedback !== null) {
			const { dispatch } = this.props;
			dispatch(FeedbackActions.userPressedAddBtn(pld));
		}
	};

    render() {
    	const {name, feedback, date} = this.state;
        return (
			<form id="form" className="col s12">
				<div className="row">
					<Column>
						<input value={name} type="text" name="name" id="name" onChange={this.onChange}/>
						<label htmlFor="name">Your name</label>
					</Column>
					<Column>
						<textarea value={feedback} className="materialize-textarea" id="feedback" name="feedback" onChange={this.onChange}/>
						<label htmlFor="feedback">Your feedback</label>
					</Column>
				</div>
				<input value={date} name="date" type="hidden"/>
				<div className="row">
					<Column>
						<button className="btn light-blue waves-effect right" onClick={this.onClick} type="button">Send
							<i className="material-icons right">send</i>
						</button>
					</Column>
				</div>
			</form>
		);
    };
}

export default connect(store => ({...store}))(Form);