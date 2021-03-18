import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, Table } from "react-bootstrap";

class ShowSelectedDrink extends React.Component {
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
        {
          ingredient: this.props.theDrink.strIngredient6,
          measurement: this.props.theDrink.strMeasure6,
        },
        {
          ingredient: this.props.theDrink.strIngredient7,
          measurement: this.props.theDrink.strMeasure7,
        },
        {
          ingredient: this.props.theDrink.strIngredient8,
          measurement: this.props.theDrink.strMeasure8,
        },
        {
          ingredient: this.props.theDrink.strIngredient9,
          measurement: this.props.theDrink.strMeasure9,
        },
        {
          ingredient: this.props.theDrink.strIngredient10,
          measurement: this.props.theDrink.strMeasure10,
        },
      ],

      glassware: this.props.theDrink.strGlass,
      alcoholic: this.props.theDrink.strAlcoholic,
    };
  }
  render() {
    return (
      <Container>
        <button onClick={this.props.showAllMyDrinks}>back</button>
        <h2>{this.state.name}</h2>
        <img src={this.state.image} height="200px"></img>
        <p>Type of cocktail: {this.state.alcoholic}</p>
        <p>Ingredients: {this.state.ingredientsObjects[0].ingredient}</p>
        <p>Measurements: {this.state.ingredientsObjects[0].measurement}</p>
        <p>Instructions: {this.state.instructions}</p>
        <p>Glassware: {this.state.glassware}</p>
        {console.log(this.state.ingredientsObjects[0])}
      </Container>
    );
  }
}
// something here

export default ShowSelectedDrink;
