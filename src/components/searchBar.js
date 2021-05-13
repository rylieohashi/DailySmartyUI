import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom'; 

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('trying to handle submit for query', query);
        //navigate to a new route
        this.props.history.push('/results'); //this ".push" will push it to the results page
    }

renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input}/> /*this is for rendering an input: the search bar*/
}

    render() {

        const { handleSubmit } = this.props;

        return (
           <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> {/*event listener will submit on hitting enter in search bar*/}
               <Field name="query" component={this.renderInput}/>
           </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar); //withRouter is just high order component that's been created by RRdom. export function with router

export default SearchBar;