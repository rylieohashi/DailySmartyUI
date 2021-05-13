import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('trying to handle submit for query', query);
        //navigate to a new route
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

export default SearchBar;