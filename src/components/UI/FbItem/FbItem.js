import React, { Component } from 'react';

class FbItem extends Component {
    render() {
    	const { data } = this.props;

        return (
			<div className="card horizontal" {...this.props}>
				<div className="card-image valign-wrapper">
					<img className="responsive-img valign" style={{borderRadius:'50%'}} src={data.avatar} alt="avatar"/>
				</div>
				<div className="card-stacked">
					<b className="cyan-text">{data.name}</b>
					<div className="container">
						<p>{ data.content }</p>
					</div>

					<div className="card-action">
						<i className="right">
							{ data.date }
						</i>
					</div>
				</div>
			</div>
		);
    };
}

export default FbItem;