import React, { FC } from "react";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  deleteItem: Function;
}

const Note: FC<NoteProps> = ({ id, title, content, deleteItem }) => {
  return (
    <div>
      <button className="btn-primary" onClick={() => deleteItem(id)}>Delete Note</button>
      <h1>{title}</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Content: {content}</li>
      </ul>
    </div>
  );
};

export default Note;
