import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddNote from "./components/AddNote";

import EditNote from "./components/EditNote";
import Notes from "./components/NotesList";
import NoteDetails from "./components/NoteDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Notes} />
          <Route path="/add" component={AddNote} />
          <Route path="/edit/:id" component={EditNote} />
          <Route path="/note/:id" component={NoteDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
