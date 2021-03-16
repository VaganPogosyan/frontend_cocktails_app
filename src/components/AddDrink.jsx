import React from 'react';
import DrinkInfo from './DrinkInfo'

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
        }, () => {
            // fetch request
            fetch(this.state.searchURL)
                .then(response => {
                    return response.json()
                }).then(json => this.setState({
                    drinks: json.drinks,
                    drinkName: ''
                  }),
                err => console.log(err))
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
                {/* link to show search results in json format */}
                <a href={this.state.searchURL}>{this.state.searchURL}</a>
                {/* render search results */}
                {(this.state.drinks)
                    ? <DrinkInfo drinks={this.state.drinks} />
                    : ''
                }
                {/* <DrinkInfo /> */}
                {/* add to favorite list button */}
            </div>
        )
    }
};

export default AddDrink;
