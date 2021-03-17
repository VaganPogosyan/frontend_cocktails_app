import React from "react";
import ShowCocktail from "./ShowCocktail";

class CocktailsSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
      searchURL: "",
      drinkId: "",
      show: false,
    };
  }
  getCocktail(key) {
    console.log(key);
    this.setState({
      drinkId: key,
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <ShowCocktail drinkId={this.state.drinkId} />
        ) : (
          <div>
            {this.props.drinks.map((drink) => {
              return (
                <div
                  key={drink.idDrink}
                  onClick={() => this.getCocktail(drink.idDrink)}
                >
                  <h3>{drink.strDrink}</h3>
                  <img src={drink.strDrinkThumb} height="200"></img>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default CocktailsSearchResults;

// <div>
// {this.state.show ? <ShowCocktail drinkId={this.state.drinkId} /> : ""}
// <div>
//   {this.props.drinks.map((drink) => {
//     return (
//       <div
//         key={drink.idDrink}
//         onClick={() => this.getCocktail(drink.idDrink)}
//       >
//         <p>{drink.strDrink}</p>
//         <p>{drink.idDrink}</p>
//         <img src={drink.strDrinkThumb} height="200"></img>
//       </div>
//     );
//   })}
// </div>
// </div>
