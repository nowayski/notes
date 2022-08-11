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

  const titleChangeHandler = (e: ChangeEvent<HTMLFormElement>) => {
    const newText = e.currentTarget.value;
    setTitleVal(newText);
  };

  const contentChangeHandler = (e: ChangeEvent<HTMLFormElement>) => {
    const newText = e.currentTarget.value;
    setContentVal(newText);
  };

  return (
    <div>
      <form onSubmit={addNotehandler}>
        <label htmlFor="title"></label>
        <input
          onChange={titleChangeHandler}
          value={titleVal}
          type="text"
          name="title"
          placeholder="Enter your title"
        ></input>
        <label htmlFor="content"></label>
        <input
          onChange={contentChangeHandler}
          value={contentVal}
          type="text"
          name="content"
          placeholder="Enter your content..."
        ></input>
        <label htmlFor="submit">Create New Note</label>
        <input type="submit" name="submit"></input>
      </form>
    </div>
  );
};

export default AddNote;
