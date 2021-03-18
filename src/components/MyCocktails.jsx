import React from "react";
import ShowSelectedDrink from "./ShowSelectedDrink";
import UpdateCocktail from "./UpdateCocktail";

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
                <button
                  className="delete"
                  onClick={() => this.props.deleteDrink(drink._id)}
                >
                  🗑️
                </button>
                <button>update</button>
              </div>
            );
          })
        ) : (
          <div>
            <ShowSelectedDrink drink={this.state.drink} />
            <UpdateCocktail
              drink={this.state.drink}
              id={this.state.drink._id}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MyCocktails;
