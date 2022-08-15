import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface AddNoteProps {
  listLength: number;
  addNote: Function;
}

const AddNote: FC<AddNoteProps> = (props) => {
  const [titleVal, setTitleVal] = useState("");
  const [contentVal, setContentVal] = useState("");
  const [expanded, setExpanded] = useState(false);

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
    setTitleVal("");
    setContentVal("");
    close();
  };

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.currentTarget.value;
    setTitleVal(newText);
  };

  const contentChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.currentTarget.value;
    setContentVal(newText);
  };

  const expand = () => {
    setExpanded(true);
  };

  const close = () => {
    setExpanded(false);
  };

  return (
    <div className="container w-3/4 my-4 m-auto text-center">
      <form onSubmit={addNotehandler} id="addNewCard">
        <div className="grid grid-cols-1 justify-items-center md:justify-items-start border rounded-md md:w-1/4 text-center shadow-md">
          <div className="w-full m-0">
            <label htmlFor="title"></label>
            <input
              onFocus={expand}
              className="text-left w-full p-1 my-1"
              onChange={titleChangeHandler}
              value={titleVal}
              type="text"
              name="title"
              placeholder="Enter your title"
            ></input>
          </div>
          {expanded ? (
            <div className="w-full m-0">
              <label htmlFor="content"></label>
              <TextareaAutosize
                className="p-1 resize-none text-left py-2 w-full"
                onChange={contentChangeHandler}
                value={contentVal}
                name="content"
                placeholder="Enter your content..."
                form="addNewCard"
                maxRows={20}
              ></TextareaAutosize>
            </div>
          ) : null}
          {expanded ? (
            <div>
              <input
                className="btn-primary"
                type="submit"
                name="submit"
              ></input>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default AddNote;
