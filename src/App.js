import React from 'react';
import CocktailsSearchResults from './components/CocktailsSearchResults'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      drinkName: '',
      searchURL: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.drinkName
    }, () => {
      fetch(this.state.searchURL)
        .then(response => { return response.json() })
        .then(json => this.setState({
          drinks: json.drinks,
          drinkName: ''
        }))
    })

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="drinkName">label</label>
          <input
            id='drinkName'
            type='text'
            value={this.state.drinkName}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
          />
        </form>
        <div>
          <CocktailsSearchResults drinks={this.state.drinks} />
        </div>

      </div>
    )
  }
}












export default App