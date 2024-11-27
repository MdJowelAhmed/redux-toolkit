import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
const [editToBook, setEditToBook]=useState(null)

  const handleEdit=(book)=>{
   setEditToBook(book)
  }
  console.log(editToBook)
  return (
    <>
      <div>
        <AddBook editToBook={editToBook} />
        <BookList onHandleEdit={handleEdit}/>
      </div>
    </>
  );
}

export default App;
