import React from "react";
import ShowCocktail from "./ShowCocktail";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, Row } from 'react-bootstrap'

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
      <Container>
          <div>
            { this.state.hide ? (
              <div>
                <Button variant="secondary" onClick={this.props.showMyList}>back</Button>
              </div>
            ) : (
              ""
            )}
          </div>
          { this.state.hide ? 
            <div>
              <h2>Search Results</h2>
              <Row xs={2} sm={3} md={4} lg={5}>
                {
                  this.props.drinks.map((drink) => {
                    return (
                      <Card key={drink.idDrink} onClick={() => this.getCocktail(drink)}>
                        <Card.Img variant="top" src={ drink.strDrinkThumb }/>
                        <Card.Title>{ drink.strDrink }</Card.Title>
                      </Card>
                      // <div key={drink.idDrink} onClick={() => this.getCocktail(drink)}>
                      //   <h3>{drink.strDrink}</h3>
                      //   <img src={drink.strDrinkThumb} alt="cocktail" height="200px" />
                      // </div>
                    );
                  })
                }
              </Row>
            </div>
          : (
            <ShowCocktail
              drink={this.state.drink}
              getCocktail={() => this.getCocktail(this.state.drink)}
            />
          )}
      </Container>
      // <div>
      //   <div>
      //     {this.state.hide ? (
      //       <button onClick={this.props.showMyList}>back</button>
      //     ) : (
      //       ""
      //     )}
      //   </div>
      //   {this.state.hide ? (
      //     this.props.drinks.map((drink) => {
      //       return (
      //         <div key={drink.idDrink} onClick={() => this.getCocktail(drink)}>
      //           <h3>{drink.strDrink}</h3>
      //           <img src={drink.strDrinkThumb} alt="cocktail" height="200px" />
      //         </div>
      //       );
      //     })
      //   ) : (
      //     <ShowCocktail
      //       drink={this.state.drink}
      //       getCocktail={() => this.getCocktail(this.state.drink)}
      //     />
      //   )}
      // </div>
    );
  }
}
export default CocktailsSearchResults;
