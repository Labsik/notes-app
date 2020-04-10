import React, { Component } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

class NotesList extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    axios
      .get("/notes")
      .then((res) => {
        this.setState({
          notes: res.data,
        });
      })
      .catch((err) => {
        console.log(err, "Error from Notes List");
      });
  }

  deleteNote = (id) => {
    axios
      .delete("/notes/" + id)
      .then(() => {
        this.setState((state) => ({
          notes: state.notes.filter((note) => note._id !== id),
        }));
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <table className="table" style={{ marginTop: 20 }}>
          <thead className="thead-dark">
            <tr>
              <th>Band name</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {notes.length ? (
              notes.map((note) => {
                return (
                  <NoteItem
                    note={note}
                    key={note._id}
                    deleteNote={this.deleteNote}
                  />
                );
              })
            ) : (
              <tr>
                <td> You haven&#39;t had notes yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default NotesList;
