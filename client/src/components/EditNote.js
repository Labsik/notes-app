import React, { Component } from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";

class EditNote extends Component {
  state = {
    title: "",
    genre: "",
  };

  componentDidMount() {
    axios
      .get("/notes/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          genre: res.data.genre,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();

    const note = {
      title: this.state.title,
      genre: this.state.genre,
    };

    axios
      .put("/notes/" + this.props.match.params.id, note)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
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
        <h3>{t("editNote")}</h3>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">{t("editTitle")}</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={this.state.title}
              placeholder="Edut music band"
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">{t("editGenre")}</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              id="genre"
              value={this.state.genre}
              placeholder="Edit music genre"
              onChange={this.changeHandler}
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            {t("editNote")}
          </button>
        </form>
      </div>
    );
  }
}

export default withNamespaces()(EditNote);
