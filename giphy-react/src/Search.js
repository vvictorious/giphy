import React, {Component} from 'react';

class Search extends Component {
	render(){
		return(
			<form onSubmit={this.props.handleSubmit}>
				<input type="text"
					value={this.props.handleChange}
					/>
			<input type="submit" value="Search"/>
			</form>
		);
	}
}

export default Search;