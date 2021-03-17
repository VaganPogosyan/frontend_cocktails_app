import React from "react";
import ShowSelectedDrink from "./ShowSelectedDrink";

class MyCocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      instructions: "",
      ingredients: "",
      alcoholic: "",
      measurements: "",
      glassware: "",
      hide: true,
      drink: "",
    };
  }

  getSelectedCocktail(drink) {
    this.setState({
      drink: drink,
      hide: !this.state.hide,
    });
    console.log(this.state.drink);
  }

  render() {
    return (
      <div>
        {this.state.hide ? (
          this.props.allDrinks.map((drink) => {
            return (
              <div key={drink._id}>
                <div onClick={() => this.getSelectedCocktail(drink)}>
                  <h3>{drink.name}</h3>
                  <img src={drink.image} height="200px"></img>
                </div>
                <button onClick={() => this.props.deleteDrink(drink._id)}>
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <ShowSelectedDrink drink={this.state.drink} />
        )}
      </div>
    );
  }
}

export default MyCocktails;
