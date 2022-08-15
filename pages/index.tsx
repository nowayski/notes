import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import { useState } from "react";

const Home: NextPage = () => {
  interface NewNote {
    id: number;
    title: string;
    content: string;
  }

  const [noteList, setNoteList] = useState<NewNote[]>([]);

  function addNoteHandler(note: NewNote) {
    setNoteList((prevVals) => {
      return [...prevVals, note];
    });
  }

  const deleteFromItemList = (id: number) => {
    setNoteList((prevItems) => {
      return prevItems.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="">
      <Header />
      <AddNote listLength={noteList.length} addNote={addNoteHandler} />

      <div className="grid grid-cols-1 gap-4 justify-items-center my-5 md:grid-cols-7 md:px-10">
        {noteList.map((n, index) => (
          <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}
            deleteItem={deleteFromItemList}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
