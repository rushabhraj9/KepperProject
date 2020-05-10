import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//use below function when u r not using arrow function.
/*function createNote(note){
  return <Note 
  title={note.title}
  content={note.content}
  />
}*/

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => {
        return <Note title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
