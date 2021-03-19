import React from "react";
import MyCocktails from "./MyCocktails";
import UpdateCocktail from "./UpdateCocktail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Table, Form } from "react-bootstrap";

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
      drink: this.props.drink,
      name: this.props.drink.strDrink,
      image: this.props.drink.strDrinkThumb,
      instructions: this.props.drink.strInstructions,
      ingredientsObjects: [
        {
          ingredient: this.props.drink.strIngredient1,
          measurement: this.props.drink.strMeasure1,
        },
        {
          ingredient: this.props.drink.strIngredient2,
          measurement: this.props.drink.strMeasure2,
        },
        {
          ingredient: this.props.drink.strIngredient3,
          measurement: this.props.drink.strMeasure3,
        },
        {
          ingredient: this.props.drink.strIngredient4,
          measurement: this.props.drink.strMeasure4,
        },
        {
          ingredient: this.props.drink.strIngredient5,
          measurement: this.props.drink.strMeasure5,
        },
        {
          ingredient: this.props.drink.strIngredient6,
          measurement: this.props.drink.strMeasure6,
        },
      ],
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
    this.backToSearchList = this.backToSearchList.bind(this);
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
  componentDidMount() {
    console.log(this.props.id);
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

  handleSubmit(event) {
    event.preventDefault();
    this.state.ingredients.map((ingredient) => {
      if (ingredient === null) {
        ingredient = "";
      }
    });
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
          name: "",
          image: "",
          instructions: "",
          ingredients: "",
        });
      })
      .catch((error) => console.log({ Error: error }));
    console.log("submit");
    this.getDrinks();
    this.backToSearchList();
  }

  backToSearchList() {
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
      <Container>
        {this.state.showList ? (
          <MyCocktails
            allDrinks={this.state.allDrinks}
            deleteDrink={(id) => this.deleteDrink(id)}
            backToSearchList={this.backToSearchList}
            drink={this.state.drink}
          />
        ) : (
          <div>
            <Button variant="secondary" onClick={this.props.getCocktail}>
              Back to Search Results
            </Button>
            <p></p>
            <h1>{this.state.name}</h1>
            <img src={this.state.image} alt="cocktail" height="200px" />
            <p></p>
            <div>
              <Form onSubmit={this.handleSubmit}>
                {/* Name */}

                <input
                  className="hide"
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                />
                {/* Image */}

                <input
                  className="hide"
                  type="text"
                  name="image"
                  id="image"
                  value={this.state.image}
                />
                {/* Instructions */}

                <input
                  className="hide"
                  type="text"
                  name="instructions"
                  id="instructions"
                  value={this.state.instructions}
                />
                {/* Ingredients */}

                <input
                  className="hide"
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  value={this.state.ingredients}
                />
                {/* Alcoholic */}

                <input
                  className="hide"
                  type="text"
                  name="alcoholic"
                  id="alcoholic"
                  value={this.state.alcoholic}
                />
                {/* Measurements */}

                <input
                  className="hide"
                  type="text"
                  name="measurements"
                  id="measurements"
                  value={this.state.measurements}
                />
                {/* Glassware */}

                <input
                  className="hide"
                  type="text"
                  name="glassware"
                  id="glassware"
                  value={this.state.glassware}
                />
                <Button
                  variant="success"
                  className="love"
                  type="submit"
                  value="🤎"
                >
                  Add to My Cocktails
                </Button>
              </Form>
            </div>
            <p></p>
            <h4>Instructions</h4>
            <p>{this.state.instructions}</p>
            <h4>Glassware</h4>
            <p>{this.state.glassware}</p>
            <h4>Ingredients</h4>
            <Table>
              <thead>
                <th>measurement</th>
                <th>ingredient</th>
              </thead>
              <tbody>
                {this.state.ingredientsObjects.map((ingredient) => {
                  return (
                    <tr>
                      <td>{ingredient.measurement}</td>
                      <td>{ingredient.ingredient}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <p></p>
          </div>
        )}
      </Container>
    );
  }
}
export default ShowCocktail;
