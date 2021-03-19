import React from "react";
import MyCocktails from "./MyCocktails";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://backend-cocktails.herokuapp.com";
}
class UpdateCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.theDrink.strDrink,
      image: this.props.theDrink.strDrinkThumb,
      instructions: this.props.theDrink.strInstructions,
      ingredientsObjects: [
        {
          ingredient: this.props.theDrink.strIngredient1,
          measurement: this.props.theDrink.strMeasure1,
        },
        {
          ingredient: this.props.theDrink.strIngredient2,
          measurement: this.props.theDrink.strMeasure2,
        },
        {
          ingredient: this.props.theDrink.strIngredient3,
          measurement: this.props.theDrink.strMeasure3,
        },
        {
          ingredient: this.props.theDrink.strIngredient4,
          measurement: this.props.theDrink.strMeasure4,
        },
        {
          ingredient: this.props.theDrink.strIngredient5,
          measurement: this.props.theDrink.strMeasure5,
        },
      ],

      glassware: this.props.theDrink.strGlass,
      alcoholic: this.props.theDrink.strAlcoholic,
      ingredientArr: [
        this.props.theDrink.strIngredient1 + " ",

        " " + this.props.theDrink.strIngredient2 + " ",

        " " + this.props.theDrink.strIngredient3 + " ",

        " " + this.props.theDrink.strIngredient3 + " ",

        " " + this.props.theDrink.strIngredient5 + " ",
      ],
      measurementArr: [
        " " + this.props.theDrink.strMeasure1 + " ",

        " " + this.props.theDrink.strMeasure2 + " ",

        " " + this.props.theDrink.strMeasure3 + " ",
      ],
    };
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
    console.log(this.state.allDrinks);
    const copyDrinks = [...this.state.allDrinks];
    copyDrinks.unshift(drink);
    this.setState({
      allDrinks: copyDrinks,
    });
    console.log(this.state.allDrinks);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/cocktails/" + this.props.id, {
      method: "PUT",
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
          name: "",
          image: "",
          instructions: "",
          ingredients: "",
        });
      })
      .catch((error) => console.log({ Error: error }));
    console.log("submit");
    this.getDrinks();
    this.setState({
      showList: !this.state.showList,
    });
  }

  render() {
    return (
      <div>
        {this.state.showList ? (
          <MyCocktails allDrinks={this.state.allDrinks} />
        ) : (
          <div>
            <button onClick={this.props.handleUpdate}>back</button>
            <h1>cocktails1</h1>

            <h3>{this.state.name}</h3>
            <img src={this.state.image} alt="cocktail" height="200px" />
            <div>
              <form onSubmit={this.handleSubmit}>
                {/* Name */}

                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
                {/* Image */}

                <input
                  type="text"
                  name="image"
                  id="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                  placeholder="Image"
                />
                {/* Instructions */}

                <input
                  type="text"
                  name="instructions"
                  id="instructions"
                  value={this.state.instructions}
                  onChange={this.handleChange}
                  placeholder="Instructions"
                />
                {/* Ingredients */}

                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  value={this.state.ingredientArr}
                  onChange={this.handleChange}
                  placeholder="Ingredients"
                />
                {/* Alcoholic */}

                <input
                  type="text"
                  name="alcoholic"
                  id="alcoholic"
                  value={this.state.alcoholic}
                  onChange={this.handleChange}
                  placeholder="Alcoholic"
                />
                {/* Measurements */}

                <input
                  type="text"
                  name="measurements"
                  id="measurements"
                  value={this.state.measurementArr}
                  onChange={this.handleChange}
                  placeholder="Measurements"
                />
                {/* Glassware */}

                <input
                  type="text"
                  name="glassware"
                  id="glassware"
                  value={this.state.glassware}
                  onChange={this.handleChange}
                  placeholder="Glassware"
                />
                <input type="submit" value="Add" />
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default UpdateCocktail;
