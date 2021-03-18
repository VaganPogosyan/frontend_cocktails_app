import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, Row, Table } from 'react-bootstrap'

class ShowSelectedDrink extends React.Component {
  render() {
    return (
      <Container>
        <button onClick={this.props.showAllMyDrinks}>back</button>
        <h2>{this.props.drink.name}</h2>
        <img src={this.props.drink.image} height="200px"></img>
        <p>Type of cocktail: {this.props.drink.alcoholic}</p>
        <p>Ingredients: {this.props.drink.ingredients}</p>
        <p>Measurements: {this.props.drink.measurements}</p>
        <p>Instructions: {this.props.drink.instructions}</p>
        <p>Glassware: {this.props.drink.glassware}</p>
      </Container>
    );
  }
}

export default ShowSelectedDrink;
