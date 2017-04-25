import React, { Component } from 'react';

class Column extends Component {
    render() {
        return (
			<div className="input-field col s12 m8 l6 offset-m2 offset-l3">
				{this.props.children}
			</div>
		);
    };
}

export default Column;