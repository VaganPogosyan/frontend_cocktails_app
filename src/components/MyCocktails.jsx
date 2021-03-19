import React from "react";
import ShowSelectedDrink from "./ShowSelectedDrink";
import UpdateCocktail from "./UpdateCocktail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, ButtonGroup } from "react-bootstrap";

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
      theDrink: this.props.drink,
      allDrinks: this.props.allDrinks,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.backToIndex = this.backToIndex.bind(this);
    this.showAllMyDrinks = this.showAllMyDrinks.bind(this);
  }

  showAllMyDrinks() {
    this.setState({
      hide: !this.setState.hide,
    });
    console.log(this.state.drink._id);
  }

  handleUpdate() {
    this.setState({
      showUpdate: !this.state.showUpdate,
    });
  }
  getSelectedCocktail(drink) {
    this.setState({
      drink: drink,
      hide: !this.state.hide,
    });
  }
  backToIndex() {
    window.location.reload();
  }
  update(drink) {
    this.getSelectedCocktail(drink);
    this.handleUpdate();
  }

  render() {
    return (
      <div>
        {this.state.hide ? (
          <Button variant="secondary" onClick={this.backToIndex}>
            back to home
          </Button>
        ) : (
          ""
        )}

        {this.state.showUpdate ? (
          <UpdateCocktail
            theDrink={this.state.theDrink}
            id={this.state.drink._id}
            handleUpdate={this.handleUpdate}
            drink={this.state.drink}
          />
        ) : (
          <div>
            {this.state.hide ? (
              <div>
                <h1>Edit My Cocktails</h1>
                <p></p>
                <Row xs={2} sm={3} md={4} lg={5}>
                  {this.props.allDrinks.map((drink) => {
                    return (
                      <Card key={drink._id}>
                        <Card.Body
                          onClick={() => this.getSelectedCocktail(drink)}
                        >
                          <Card.Img variant="top" src={drink.image} />
                          <Card.Title>{drink.name}</Card.Title>
                        </Card.Body>
                        <ButtonGroup size="sm">
                          <Button
                            variant="danger"
                            className="delete"
                            onClick={() => this.props.deleteDrink(drink._id)}
                          >
                            🗑️
                          </Button>
                          <Button
                            variant="info"
                            onClick={() => this.update(drink)}
                          >
                            update
                          </Button>
                        </ButtonGroup>
                        {/* <button
                          className="delete"
                          onClick={() => this.props.deleteDrink(drink._id)}
                        >
                          🗑️
                        </button>
                        <button onClick={() => this.handleUpdate()}>
                          update
                        </button> */}
                      </Card>
                      // <div key={drink._id}>
                      //   <div onClick={() => this.getSelectedCocktail(drink)}>
                      //     <h3>{drink.name}</h3>
                      //     <img src={drink.image} height="200px"></img>
                      //   </div>
                      //   <button
                      //     className="delete"
                      //     onClick={() => this.props.deleteDrink(drink._id)}
                      //   >
                      //     🗑️
                      //   </button>
                      //   <button onClick={() => this.handleUpdate()}>update</button>
                      // </div>
                    );
                  })}
                </Row>
              </div>
            ) : (
              <div>
                <ShowSelectedDrink
                  drink={this.state.drink}
                  showAllMyDrinks={this.showAllMyDrinks}
                  theDrink={this.state.theDrink}
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
