import React, { FC } from "react";

interface NoteProps {
  id: number;
  title: string;
  content: string;
}

const Note: FC<NoteProps> = ({ id, title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Content: {content}</li>
      </ul>
    </div>
  );
};

export default Note;
