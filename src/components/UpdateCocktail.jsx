import React from "react";
import MyCocktails from "./MyCocktails";

let baseURL = "";
let id = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "you heroku backend url here";
}
class UpdateCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.drink.name,
      image: this.props.drink.image,
      instructions: this.props.drink.instructions,
      ingredients: this.props.drink.ingredients,
      measurements: this.props.drink.measurements,
      alcoholic: this.props.drink.alcoholic,
      glassware: this.props.drink.glassware,
      id: this.props.drink._id,
      allDrinks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddDrinks = this.handleAddDrinks.bind(this);
    this.getDrinks = this.getDrinks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state.allDrinks);
    const copyDrinks = [...this.state.allDrinks];
    copyDrinks.unshift(drink);
    this.setState({
      allDrinks: copyDrinks,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleSubmit(event) {
    id = this.state.id;
    event.preventDefault();
    fetch(baseURL + "/cocktails/" + id, {
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
          measurements: "",
          alcoholic: "",
          glassware: "",
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

            <h3>{this.props.drink.name}</h3>
            <img src={this.props.drink.image} alt="cocktail" height="200px" />
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
                  value={this.state.ingredients}
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
                  value={this.state.measurements}
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
