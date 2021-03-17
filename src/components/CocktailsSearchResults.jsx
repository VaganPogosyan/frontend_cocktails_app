import React from "react";
import MyCocktails from "./MyCocktails";
import ShowCocktail from "./ShowCocktail";
import UpdateCocktail from "./UpdateCocktail";

class CocktailsSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
      searchURL: "",
      drinkId: "",
      drink: "",
      hide: true,
    };
  }
  getCocktail(drink) {
    console.log(drink);
    this.setState({
      drink: drink,
      hide: !this.state.hide,
    });
  }

  render() {
    return (
      <div>
        {this.state.hide ? (
          this.props.drinks.map((drink) => {
            return (
              <div key={drink.idDrink} onClick={() => this.getCocktail(drink)}>
                <h3>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt="cocktail" height="200px" />
              </div>
            );
          })
        ) : (
          <div>
            <ShowCocktail drink={this.state.drink} />
          </div>
        )}
      </div>
    );
  }
}
export default CocktailsSearchResults;
