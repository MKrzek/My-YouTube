import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.jsx';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
        }
    }
    render(){
        return<div>
             <Title/>
            <div className='col-12 search-bar'>   
                <label>Enter a word to find videos you are looking for:
         <input value ={this.state.term} className='searchInput'
                onChange={(event)=>this.onInputChange(event.target.value)}/>
             </label>    
            </div>
            </div>
        

    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange (term)

    }
    
    }


export default SearchBar;