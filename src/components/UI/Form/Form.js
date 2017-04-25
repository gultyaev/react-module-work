import React, { Component } from 'react';
import Column from './Column';
import 'materialize-css/bin/materialize';
// import $ from 'jquery';

class Form extends Component {
	componentDidMount() {
		// Materialize.updateTextFields();

		document.querySelector('#form').addEventListener('keypress', function (e) {
			if (e.keyCode === 13) {
				e.preventDefault();
			}
		});
	};

    render() {
        return (
			<form id="form" className="col s12">
				<div className="row">
					<Column>
						<textarea className="materialize-textarea" id="feedback" name="feedback"/>
						<label htmlFor="feedback">Your feedback</label>
					</Column>
				</div>
				<input name="date" type="hidden"/>
				<div className="row">
					<Column>
						<button className="btn light-blue waves-effect right" type="button">Send
							<i className="material-icons right">send</i>
						</button>
					</Column>
				</div>
			</form>
		);
    };
}

export default Form;