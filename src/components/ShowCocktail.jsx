import React from "react";

class ShowCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: [],
    };
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
      </div>
    );
  }
}
export default ShowCocktail;
