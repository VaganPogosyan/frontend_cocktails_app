import React from "react";

class MyCocktails extends React.Component {
  render() {
    return (
      <div>
        <h1>My Cocktails</h1>
        {this.props.allDrinks.map((drink) => {
          return (
            <div key={drink._id}>
              <h3>{drink.name}</h3>
              <img src={drink.image} height="200px"></img>
              <button onClick={() => this.props.deleteDrink(drink._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyCocktails;
