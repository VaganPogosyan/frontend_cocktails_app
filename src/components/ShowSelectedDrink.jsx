import React from "react";

class ShowSelectedDrink extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.drink.name}</h2>
        <img src={this.props.drink.image} height="200px"></img>
        <p>Type of cocktail: {this.props.drink.alcoholic}</p>
        <p>Ingredients: {this.props.drink.ingredients}</p>
        <p>Measurements: {this.props.drink.measurements}</p>
        <p>Instructions: {this.props.drink.instructions}</p>
        <p>Glassware: {this.props.drink.glassware}</p>
      </div>
    );
  }
}

export default ShowSelectedDrink;
