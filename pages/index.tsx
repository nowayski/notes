import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import { useState } from "react";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  interface NewNote {
    id: number;
    title: string;
    content: string;
  }

  const [noteList, setNoteList] = useState<NewNote[]>([]);

  function addNoteHandler(note: NewNote) {
    setNoteList((prevVals) => {
      return [note, ...prevVals];
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
      <div className="flex flex-row h-full">
        <div className="basis-1/6">
          <SideBar />
        </div>
        <div className="basis-5/6">
          <AddNote listLength={noteList.length} addNote={addNoteHandler} />
          <div className="w-full gap-6 md:columns-5 md:px-10">
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
      </div>
    </div>
  );
};

export default Home;
