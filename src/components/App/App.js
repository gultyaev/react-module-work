import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';

import { FeedbackActions } from '../../actions';

//UI
import {Form, Loader, FbItem} from '../UI';
import Column from '../UI/Form/Column';

class App extends Component {

	onClickMore = () => {
		const { dispatch } = this.props;
		dispatch(FeedbackActions.userPressedMore());
	};

  render() {
  	const { fb } = this.props;

  	// console.log('----props');
  	// console.log(this.props);
  	// console.log('----fb');
  	// console.log(fb);

    return (
		<div>
			<div className="row">
				<div className="col s12 blue lighten-1 white-text">
					<h4 className="center-align">Hello, shit!</h4>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<Form/>
				</div>
				<div className="row">
					<Column>
						<div className="divider"/>
						<Loader style={(fb.isLoading === false)?{display: 'none'}:{}}/>
						{fb.data.map(function(e,i){
							if(i<fb.showCount) {
								return(
									<FbItem data={e} key={i}/>
								);
							}
						})}
						<p className="text-accent-3 right" style={(fb.showCount < fb.data.length)?{}:{display: 'none'}} onClick={this.onClickMore}>show more...</p>
					</Column>
				</div>
			</div>
		</div>
    );
  }
}

export default connect(store => ({...store}))(App);
