import React from "react";

class ShowCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
      searchURL: "",
    };
    this.goToCocktail = this.goToCocktail.bind(this);
  }
  componentDidMount() {
    this.goToCocktail();
    console.log(this.props.drinkId);
  }

  goToCocktail() {
    this.setState(
      {
        searchURL: this.state.baseURL + this.props.drinkId,
      },
      () => {
        fetch(this.state.searchURL)
          .then((response) => {
            return response.json();
          })
          .then((json) =>
            this.setState({
              cocktail: json,
            })
          );
      }
    );
  }

  render() {
    return (
      <div>
        <h1>cocktails</h1>
      </div>
    );
  }
}
export default ShowCocktail;
