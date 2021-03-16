import React from 'react';

class AddDrink extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
          drinkName: '',
          searchURL: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState({
          searchURL: this.state.baseURL + this.state.drinkName
        })
      }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* text input to search API for drink */}
                    <label htmlFor="drinkName">label</label>
                    <input 
                        id='drinkName'
                        type="search" 
                        value={this.state.drinkName}
                        onChange={this.handleChange}
                    />
                    {/* submit button */}
                    <input 
                        type="submit" 
                        value="Search"
                    />
                </form>
                {/* render search results */}
                <a href={this.state.searchURL}>{this.state.searchURL}</a>
            </div>
        )
    }
};

export default AddDrink;
