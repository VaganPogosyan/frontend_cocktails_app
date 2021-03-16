import React from 'react';
import AddCocktail from './components/AddCocktail';
import CocktailInfo from './components/CocktailInfo'


let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "you heroku backend url here";
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      searchURL: '',
      drinkName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
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
          drinkName: '',
        }),
          err => console.log(err))
    })
  }
  handleAddCocktail(event) {
    event.preventDefault();
    fetch(baseURL + "/cocktails", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name, image: this.state.image }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.handleAddHoliday(resJson);
        this.setState({
          name: "",
          image: ""
        });
      })
      .catch((error) => console.log({ Error: error }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="drinkName">label</label>
          <input
            id='drinkName'
            type='search'
            value={this.state.drinkName}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
          />
        </form>
        {/* link to show search results in json format */}
        <a href={this.state.searchURL}>{this.state.searchURL}</a>
        {/* render search results */}

        {(this.state.drinks)
          ? <CocktailInfo drinks={this.state.drinks} handleAddCocktail={this.state.handleAddCocktail} handleChange={this.state.handleChange} />
          : ''
        }
        {/* <DrinkInfo /> */}
        {/* add to favorite list button */}

      </div>
    )
  }
};

export default App