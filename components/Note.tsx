import React, { FC } from "react";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  deleteItem: Function;
}

const Note: FC<NoteProps> = ({ id, title, content, deleteItem }) => {
  return (
    <div className="text-left w-3/4 border rounded-md shadow-md p-2 md:w-full">
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{content}</p>
      {/* <button className="btn-primary" onClick={() => deleteItem(id)}>
        Delete Note
      </button> */}
    </div>
  );
};

export default Note;
