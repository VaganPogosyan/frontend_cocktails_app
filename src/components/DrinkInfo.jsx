import React from 'react'

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
} else {
    baseURL = 'your heroku backend url here'
};
  
// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log('current base URL:', baseURL);


class DrinkInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          image: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + '/cocktails', {
          method: 'POST',
          body: JSON.stringify({ name: this.state.name, image: this.state.image }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(resJson => {
            // this.props.handleAddHoliday(resJson)
            this.setState({
              name: '',
              image:''
            })
          }).catch (error => console.log({'Error': error}));
          
    }

    // console.log( { this.props.drinks[0] } );

    render () {
        return (
            <div>
                <h1>drink info component</h1>
                {/* <h2>Name: {this.props.drinks[0].strDrink}</h2> */}
                {/* for loop for length of array to render each search result */}
                { this.props.drinks.map(drink => {
                    return (
                        <h2 key={drink.idDrink}>Name: { drink.strDrink }</h2>
                    )
                })}
                {/* add selected drinks to user favorite list */}
                <form onSubmit={this.handleSubmit} >
                <input type="text" name="name" id="name" value={ this.props.drinks[0].strDrink } />
                <input type="text" name="image" id="image" value={ this.props.drinks[0].strDrinkThumb } />
                <input type="submit" value="Add to Favorites"/>
                </form>
                
            </div>
        )
    }
}

export default DrinkInfo