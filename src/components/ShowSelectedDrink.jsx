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
      ],

      glassware: this.props.theDrink.strGlass,
      alcoholic: this.props.theDrink.strAlcoholic,
    };
  }
  render() {
    return (
      <Container>
        <p></p>
        <Button variant="secondary" onClick={this.props.showAllMyDrinks}>
          back to My Cocktails
        </Button>
        <p></p>
        <h2>{this.state.name}</h2>
        <img src={this.state.image} height="200px"></img>
        <p></p>
        <h4>Type of cocktail</h4>
        <p>{this.state.alcoholic}</p>
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
      </Container>
    );
  }
}
// something here

export default ShowSelectedDrink;
