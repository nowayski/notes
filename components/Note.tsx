import React, { FC } from "react";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  deleteItem: Function;
}

const Note: FC<NoteProps> = ({ id, title, content, deleteItem }) => {
  return (
    <div className="mx-1 text-left w-full mb-3 border rounded-md shadow-md p-2 break-inside-avoid">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="break-words">{content}</p>
      {/* <button className="btn-primary" onClick={() => deleteItem(id)}>
        Delete Note
      </button> */}
    </div>
  );
};

export default Note;
