import React, { Component } from "react";
import AddCocktail from "./AddCocktail";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "you heroku backend url here";
}

class CocktailInfo extends Component {
  render() {
    return (
      <div>
        {this.props.drinks.map((drink) => {
          return (
            <div>
              <p key={drink.idDrink}>Name: {drink.strDrink}</p>
              <img src={drink.strDrinkThumb} height="200"></img>
            </div>
          );
        })}
        <div>
          <form onSubmit={this.props.handleAddCocktail}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.props.handleChange}
              value={this.props.drinks[0].strDrink}
            />
            <label htmlFor="image">image:</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={this.props.handleChange}
              value={this.props.drinks[0].strDrinkThumb}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default CocktailInfo;
