import React from "react";
import MyCocktails from "./MyCocktails";

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
      instructions: this.props.drink.strInstructions,
      ingredients: [
        this.props.drink.strIngredient1,
        this.props.drink.strIngredient2,
        this.props.drink.strIngredient3,
        this.props.drink.strIngredient4,
        this.props.drink.strIngredient5,
        this.props.drink.strIngredient6,
        this.props.drink.strIngredient7,
        this.props.drink.strIngredient8,
        this.props.drink.strIngredient9,
        this.props.drink.strIngredient10,
      ],
      measurements: [
        this.props.drink.strMeasure1,
        this.props.drink.strMeasure2,
        this.props.drink.strMeasure3,
      ],
      glassware: this.props.drink.strGlass,
      alcoholic: this.props.drink.strAlcoholic,
      allDrinks: [],
      drinks: [],
      showList: false,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDrinks = this.getDrinks.bind(this);
    this.handleAddDrinks = this.handleAddDrinks.bind(this);
    // this.deleteDrink = this.deleteDrink.bind(this);
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
        instructions: this.state.instructions,
        ingredients: this.state.ingredients,
        measurements: this.state.measurements,
        glassware: this.state.glassware,
        alcoholic: this.state.alcoholic,
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
          instructions: this.state.instructions,
        });
      })
      .catch((error) => console.log({ Error: error }));
    console.log("submit");
    this.getDrinks();
    this.setState({
      showList: !this.state.showList,
    });
  }

  deleteDrink(id) {
    fetch(baseURL + "/cocktails/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.allDrinks.findIndex(
        (drink) => drink._id === id
      );
      const copyDrinks = [...this.state.allDrinks];
      copyDrinks.splice(findIndex, 1);
      this.setState({ allDrinks: copyDrinks });
    });
  }

  render() {
    return (
      <div>
        {this.state.showList ? (
          <MyCocktails
            allDrinks={this.state.allDrinks}
            deleteDrink={(id) => this.deleteDrink(id)}
          />
        ) : (
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
                {/* Name */}
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                />
                {/* Image */}
                <label htmlFor="image"></label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={this.state.image}
                />
                {/* Instructions */}
                <label htmlFor="instructions"></label>
                <input
                  type="text"
                  name="instructions"
                  id="instrictions"
                  value={this.state.instructions}
                />
                {/* Ingredients */}
                <label htmlFor="ingredients"></label>
                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  value={this.state.ingredients}
                />
                {/* Alcoholic */}
                <label htmlFor="alcoholic"></label>
                <input
                  type="text"
                  name="alcoholic"
                  id="alcoholic"
                  value={this.state.alcoholic}
                />
                {/* Measurements */}
                <label htmlFor="measurements"></label>
                <input
                  type="text"
                  name="measurements"
                  id="measurements"
                  value={this.state.measurements}
                />
                {/* Glassware */}
                <label htmlFor="glassware"></label>
                <input
                  type="text"
                  name="glassware"
                  id="glassware"
                  value={this.state.glassware}
                />
                <input type="submit" value="Add to my list" />
              </form>
            </div>

            <div></div>
          </div>
        )}
        {/* back button */}
      </div>
    );
  }
}
export default ShowCocktail;
