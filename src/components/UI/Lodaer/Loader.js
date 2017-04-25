import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
			<div className="progress" {...this.props}>
				<div className="indeterminate"/>
			</div>
		);
    };
}

export default Loader;