import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface AddNoteProps {
  listLength: number;
  addNote: Function;
}

const AddNote: FC<AddNoteProps> = (props) => {
  const [titleVal, setTitleVal] = useState("");
  const [contentVal, setContentVal] = useState("");

  interface NewNote {
    id: number;
    title: string;
    content: string;
  }

  const addNotehandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const note: NewNote = {
      id: props.listLength,
      title: titleVal,
      content: contentVal,
    };

    props.addNote(note);
  };

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.currentTarget.value;
    setTitleVal(newText);
  };

  const contentChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.currentTarget.value;
    setContentVal(newText);
  };

  return (
    <div className="p-10 m-auto text-center">
      <form onSubmit={addNotehandler}>
        <label htmlFor="title"></label>
        <input
          className="border bg-slate-200 border-slate-600 m-2"
          onChange={titleChangeHandler}
          value={titleVal}
          type="text"
          name="title"
          placeholder="Enter your title"
        ></input>
        <label htmlFor="content"></label>
        <input
          className="border bg-slate-200 border-slate-600 m-2"
          onChange={contentChangeHandler}
          value={contentVal}
          type="text"
          name="content"
          placeholder="Enter your content..."
        ></input>
        <input className="btn-primary" type="submit" name="submit"></input>
      </form>
    </div>
  );
};

export default AddNote;
