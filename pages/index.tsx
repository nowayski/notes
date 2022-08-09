import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello World.</h1>
      <Note id={1} title="My Note" content="This is one of my notes" />
      <Footer />
    </div>
  );
};

export default Home;
