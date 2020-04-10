import React, { Component } from "react";
import axios from "axios";

class NoteDetails extends Component {
  state = {
    note: {},
  };

  componentDidMount() {
    axios
      .get("/notes/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          note: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { note } = this.state;

    return (
      <div className="card border-light mt-5">
        <div className="card-header">Note</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            <strong> {note.title}</strong> plays in {note.genre} genre
          </p>
        </div>
      </div>
    );
  }
}

export default NoteDetails;
