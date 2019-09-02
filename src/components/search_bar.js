import React, { Component } from 'react';
import '../index.css';

class SearchBar extends Component {
    state = {
        term: ''
    }
    
    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.onSearchTermChange(e.target.value);
    }
    render() { 
        return (
            <div className="search-bar">
            <input 
            onChange={this.onInputChange}
            value={this.state.term}/>
            
            </div>
         );

    }
}
 
export default SearchBar;