import React from "react";

class ShowSelectedDrink extends React.Component {
    render() {
        return (
            <div>
                <h1>My Cocktail</h1>
                <h2>{this.props.drink.name}</h2>
                <p>{this.props.drink.instructions}</p>
            </div>
        );
    }
}

export default ShowSelectedDrink;
