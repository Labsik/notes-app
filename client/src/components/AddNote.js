import React, { Component } from "react";
import axios from "axios";

class AddNote extends Component {
  state = {
    title: "",
    genre: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      title: this.state.title,
      genre: this.state.genre,
    };

    axios
      .post("/notes", newNote)
      .then(() => {
        this.setState({
          title: "",
          genre: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err, "Error in adding note!");
      });
  };

  changeHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  render() {
    return (
      <div>
        <h3>Add your note about music band</h3>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title"> Add music band </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={this.state.title}
              placeholder="Write music band"
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre"> Add genre </label>
            <input
              type="text"
              className="form-control"
              name="genre"
              id="genre"
              value={this.state.genre}
              placeholder="Write music genre"
              onChange={this.changeHandler}
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Add band
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
