import React from 'react'

class DrinkInfo extends React.Component {
    render () {
        return (
            <div>
                <h1>drink info component</h1>
                {/* <h2>Name: {this.props.drinks[0].strDrink}</h2> */}
                {/* for loop for length of array to render each search result */}
                { this.props.drinks.map(drink => {
                    return (
                        <h2>Name: { drink.strDrink }</h2>
                    )
                })}
                {/* add selected drinks to user favorite list */}
            </div>
        )
    }
}

export default DrinkInfo