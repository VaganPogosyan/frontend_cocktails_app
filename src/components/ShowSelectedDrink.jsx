import React from "react";

class ShowSelectedDrink extends React.Component {
    render() {
        return (
            <div>
                <h1>My Cocktails</h1>
                <h2>{this.props.drink.name}</h2>
            </div>
        );
    }
}

export default ShowSelectedDrink;
