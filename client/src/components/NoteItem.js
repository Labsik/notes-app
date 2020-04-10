import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <tr>
      <td>
        <Link to={`/note/${note._id}`}>{note.title}</Link>
      </td>
      <td>{note.genre}</td>
      <td>
        <Link
          to={"/edit/" + note._id}
          className="btn btn-light mr-2"
          role="button"
        >
          <i className="fa fa-edit"></i>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteNote(note._id);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default NoteItem;
