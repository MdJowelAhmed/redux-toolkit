import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
const [editToBook, setEditToBook]=useState(null)

  const handleEdit=(book)=>{
   setEditToBook(book)
  }
  const handleEditCancel=(book)=>{
   setEditToBook(null)
  }
  console.log(editToBook)
  return (
    <>
      <div>
        <AddBook editToBook={editToBook} onCancel={handleEditCancel}/>
        <BookList onHandleEdit={handleEdit}/>
      </div>
    </>
  );
}

export default App;
