import React from "react";
import {deleteBook} from "../../functions/deleteBook"
import { Popconfirm, message } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";


export default function BookById({ book }) {
const { isAuthenticated } = useAuth0();
 
  function confirmDelete(){
    deleteBook(book.id)
    message.success(`${book.title} has been deleted`).then(
    window.location.href = "/")
  }
  function cancel(title){
    message.error(`${title} has not been deleted`);
  }

    if (!book) {
        return <p>...</p>;
    } else {
        console.log(book);
        return (
      <div>
        <h1>{book.title}</h1>
        <h2>By {book.author}</h2>
        {book.series ? <h3>Part of the {book.series} series.</h3> : ""}
        

        <p>{book.genre} | {book.read ? "Read" : "Not read"} | Leant to:  
        {book.leant ? book.leant : " No one"}</p>

        {isAuthenticated ? 
        <p>Edit Book | 
        <Popconfirm
    title={`Are you sure to delete ${book.title}?`}
    onConfirm={confirmDelete}
    onCancel={()=>cancel(book.title)}
    okText="Yes"
    cancelText="No"
  >
        <button class="red">Delete Book</button>
        </Popconfirm>
        </p> : <></>
        }
      </div>
    );
  }
}
