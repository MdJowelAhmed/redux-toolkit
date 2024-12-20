import { createSlice } from "@reduxjs/toolkit";

const initialState={books:[
    {
      "id": 1,
      "name": "Atomic Habits",
      "author": "James Clear",
      "price": 350,
      "category": "Self-Help",
      "quality": "Excellent"
    },
    {
      "id": 2,
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 299,
      "category": "Fiction",
      "quality": "Good"
    },
    {
      "id": 3,
      "name": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "price": 450,
      "category": "History",
      "quality": "Excellent"
    },
    {
      "id": 4,
      "name": "The Subtle Art of Not Giving a F*ck",
      "author": "Mark Manson",
      "price": 320,
      "category": "Self-Help",
      "quality": "Very Good"
    },
    {
      "id": 5,
      "name": "1984",
      "author": "George Orwell",
      "price": 280,
      "category": "Dystopian",
      "quality": "Good"
    },
    {
      "id": 6,
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "price": 300,
      "category": "Classic",
      "quality": "Excellent"
    }
  ]
  }

const bookSlice= createSlice({
    name: 'books',
    initialState,
    reducers:{
        deleteBook:(state,action)=>{
            const id=action.payload;
            state.books=state.books.filter((book)=>book.id !=id)
        },
        updateBook:(state,action)=>{
            const {id, name, author, price, quality, category}=action.payload;

            const exisitingBook=state.books.find((book)=>book.id ==id)
            if(exisitingBook){
                exisitingBook.name=name
                exisitingBook.author=author
                exisitingBook.price=price
                exisitingBook.category=category
                exisitingBook.quality=quality
            }
        },
        addBook:(state,action)=>{
            state.books.push(action.payload)
        }
    }

})
export const {deleteBook, addBook, updateBook}=bookSlice.actions

export default bookSlice.reducer