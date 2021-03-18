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
      showUpdate: false,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.backToIndex = this.backToIndex.bind(this);
    this.showAllMyDrinks = this.showAllMyDrinks.bind(this);
  }

  getSelectedCocktail(drink) {
    this.setState({
      drink: drink,
      hide: !this.state.hide,
    });
    console.log(this.state.drink);
  }
  showAllMyDrinks() {
    this.setState({
      hide: !this.setState.hide,
    });
  }

  handleUpdate() {
    this.setState({
      showUpdate: !this.state.showUpdate,
    });
  }
  backToIndex() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        {this.state.hide ? (
          <button onClick={this.backToIndex}>home</button>
        ) : (
          ""
        )}

        {this.state.showUpdate ? (
          <UpdateCocktail
            drink={this.state.drink}
            id={this.state.drink._id}
            handleUpdate={this.handleUpdate}
          />
        ) : (
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
                    <button onClick={() => this.handleUpdate()}>update</button>
                  </div>
                );
              })
            ) : (
              <div>
                <ShowSelectedDrink
                  drink={this.state.drink}
                  showAllMyDrinks={this.showAllMyDrinks}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MyCocktails;
