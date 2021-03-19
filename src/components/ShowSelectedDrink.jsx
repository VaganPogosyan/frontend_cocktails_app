import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, Table } from "react-bootstrap";

class ShowSelectedDrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.drink.name,
      image: this.props.drink.image,
      instructions: this.props.drink.instructions,
      ingredients: this.props.drink.ingredients,
      measurements: this.props.drink.measurements,
      glassware: this.props.drink.glassware,
      alcoholic: this.props.drink.alcoholic,
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
            <tr>
              <td>{this.state.measurements}</td>
              <td>{this.state.ingredients}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
// something here

export default ShowSelectedDrink;
