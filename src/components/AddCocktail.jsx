import React, { Component } from "react";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "you heroku backend url here";
}

class AddCocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/cocktails", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name, image: this.state.image }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.handleAddHoliday(resJson);
        this.setState({
          name: "",
          image: "",
        });
      })
      .catch((error) => console.log({ Error: error }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            placeholder="add a holiday"
            value={this.state.name}
          />
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            placeholder="add a holiday"
            value={this.state.name}
          />
          <input type="submit" value="Add a Reason to Celebrate" />
        </form>
      </div>
    );
  }
}

export default AddCocktail;
