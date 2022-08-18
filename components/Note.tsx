import React, { FC } from "react";
import NoteDropDownMenu from "./NoteDropDownMenu";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  deleteItem: Function;
}

const Note: FC<NoteProps> = ({ id, title, content, deleteItem }) => {
  return (
    <div className="mx-1 text-left w-full mb-3 border rounded-md shadow-md p-2 break-inside-avoid">
      <div className="flex align-items-center place-items-center">
        <div className="basis-5/6">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="basis-1/6">
          <NoteDropDownMenu />
        </div>
      </div>
      <p className="break-words">{content}</p>
      <button
        className="border rounded-full "
        onClick={() => deleteItem(id)}
      ></button>
    </div>
  );
};

export default Note;
