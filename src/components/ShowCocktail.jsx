import React from "react";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "you heroku backend url here";
}

class ShowCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.drink.strDrink,
      image: this.props.drink.strDrinkThumb,
      allDrinks: [],
      drinks: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getDrinks = this.getDrinks.bind(this);
    this.handleAddDrinks = this.handleAddDrinks.bind(this);
  }
  componentDidMount() {
    this.getDrinks();
  }

  getDrinks() {
    fetch(baseURL + "/cocktails")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ allDrinks: parsedData }),
        (err) => console.log(err)
      );
  }

  handleAddDrinks(drink) {
    const copyDrinks = [...this.state.drinks];
    copyDrinks.unshift(drink);
    this.setState({
      drinks: copyDrinks,
    });
    console.log(this.state.drinks);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/cocktails", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.handleAddDrinks(resJson);
        this.setState({
          name: this.state.name,
          image: this.state.image,
        });
      })
      .catch((error) => console.log({ Error: error }));
    console.log("submit");
  }

  render() {
    return (
      <div>
        <h1>cocktails</h1>
        <h3>{this.props.drink.strDrink}</h3>
        <img
          src={this.props.drink.strDrinkThumb}
          alt="cocktail"
          height="200px"
        />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" value={this.state.name} />
            <label htmlFor="image"></label>
            <input
              type="text"
              name="image"
              id="image"
              value={this.state.image}
            />
            <input type="submit" value="Add" />
          </form>
        </div>

        <div>
          {this.state.allDrinks.map((drink) => {
            return (
              <ul key={drink._id}>
                <li>{drink.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ShowCocktail;
