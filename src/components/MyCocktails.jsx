import React from "react";
import ShowSelectedDrink from "./ShowSelectedDrink";

class MyCocktails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      hide: true,
      drink: ''
    }
  }

  getSelectedCocktail(drink) {
    this.setState({
      drink: drink,
      hide: !this.state.hide
    })
  }

  render() {
    return (
      <div>

        {this.state.hide ? (
          this.props.allDrinks.map((drink) => {
            return (
              <div key={drink._id} onClick={(drink) => this.getSelectedCocktail(drink)}>
                <h1>My Cocktails</h1>
                <h3>{drink.name}</h3>
                <img src={drink.image} height="200px"></img>
                <button onClick={() => this.props.deleteDrink(drink._id)}>Delete</button>
              </div>
            );
          })
        ) : (< ShowSelectedDrink drink={this.state.drink} />)

        }
      </div>
    );
  }
}

export default MyCocktails;
