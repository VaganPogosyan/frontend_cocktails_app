import React from "react";

class MyCocktails extends React.Component {
  render() {
    return (
      <div>
        {this.props.allDrinks.map((drink) => {
          return (
            <div key={drink._id}>
              <h3>{drink.name}</h3>
              <img src={drink.image} height="200px"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyCocktails;
