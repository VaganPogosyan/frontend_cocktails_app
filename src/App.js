import React from 'react';
import CocktailsSearchResults from './components/CocktailsSearchResults'
import MyCocktails from './components/MyCocktails';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Card, Row } from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      drinkName: '',
      searchURL: '',
      drinks: [],
      myDrinks: [],
      showMyCocktailList: true,

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderMyCocktails = this.renderMyCocktails.bind(this)
    this.showMyList = this.showMyList.bind(this)
  }

  componentDidMount() {
    this.renderMyCocktails()
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.drinkName
    }, () => {
      fetch(this.state.searchURL)
        .then(response => { return response.json() })
        .then(json => this.setState({
          drinks: json.drinks,
          drinkName: '',
        }))
    })
    this.showMyList()
  }
  showMyList() {
    this.setState({
      showMyCocktailList: !this.state.showMyCocktailList
    })
  }


  renderMyCocktails() {
    fetch('http://localhost:3003/cocktails')
      .then(
        data => {
          return data.json()
        }, err => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ myDrinks: parsedData }),
        (err) => console.log(err)
      )
    console.log(this.state.myDrinks)
  }



  render() {
    return (
      <Container fluid="md">
      


        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="drinkName">Search API to add drink</Form.Label>
            <Form.Control
              id='drinkName'
              type='text'
              value={this.state.drinkName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Search</Button>
          {/* <label htmlFor="drinkName">label</label>
          <input
            id='drinkName'
            type='text'
            value={this.state.drinkName}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
          /> */}
        </Form>


        {
          this.state.showMyCocktailList ?
            <div>
              <h2>My Favorite Cocktails</h2>
              <Row xs={2} sm={3} md={4} lg={5}>
              {
                this.state.myDrinks.map(myDrink => {
                  return (

                    <div>
                      {/* <div>
                        <h3>{myDrink.name}</h3>
                        <img src={myDrink.image} height="200px"></img>
                      </div> */}

                          <Card> 
                            <Card.Img variant="top" src={myDrink.image}/>
                            <Card.Title>{myDrink.name}</Card.Title>
                          </Card>

                    </div>
                  )
                })
              }
            </Row>
            </div>
            :
            <div>
              <CocktailsSearchResults
                drinks={this.state.drinks}
                handleAddDrinks={this.state.handleAddDrinks}
                showMyList={this.showMyList}
              />
            </div>
        }





      
      </Container>
    )
  }
}



export default App