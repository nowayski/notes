import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import { useState } from "react";

const Home: NextPage = () => {
  const [noteList, setNoteList] = useState([{}]);

  interface NewNote {
    id: number;
    title: string;
    content: string;
  }

  function addNoteHandler(note: NewNote) {
    setNoteList((prevVals) => {
      return [...prevVals, note];
    });
  }

  return (
    <div>
      <Header />
      <h1>Hello World.</h1>
      <AddNote listLength={noteList.length} addNote={addNoteHandler} />
      {noteList.map((n) => (
        <Note key={n.id} id={n.id} title={n.title} content={n.content} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
