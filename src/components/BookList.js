import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


const BookList = () => {
    const [bookList, setBookList] = useState([])
    const getBookList = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/book-list/');
          console.log(response.data.books[0].title)
          setBookList(response.data.books)
        } catch (error) {
          console.log("실패")
        }
      };
    useEffect(() => {
        getBookList()
    }, [])
    return (
        <ul className="chat-options">
        {bookList.map(book => (
          <li key={book.id} className='chat-option'>
            <NavLink to={"/"+book.id} className='link' activeclassname="active">{book.title}</NavLink>
          </li>
        ))}
        <li className='chat-option'><NavLink to='/upload' className='link'>추가하기</NavLink></li>
      </ul>
    )
}

export default BookList