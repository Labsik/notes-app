import React, { Component } from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";

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
    const { t } = this.props;
    return (
      <div className="mt-4">
        <h3>{t("addNote")}</h3>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">{t("addTitle")}</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={this.state.title}
              placeholder={t("addTitle")}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">{t("addGenre")}</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              id="genre"
              value={this.state.genre}
              placeholder={t("addGenre")}
              onChange={this.changeHandler}
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            {t("addNote")}
          </button>
        </form>
      </div>
    );
  }
}

export default withNamespaces()(AddNote);
