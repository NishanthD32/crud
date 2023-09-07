import { useNavigate, useParams } from "react-router-dom";
import BasePage from "./BasePage";
import { useEffect, useState } from "react";

export default function EditPage({ bookDatas, setData }) {

  const { id } = useParams();

  const navigate = useNavigate()

  const [idx, setIdx] = useState("")
  const [bookName, setBookName] = useState("")
  const [author, setAuthor] = useState("")
  const [language, setLanguage] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    console.log("id : ", id)
    const selectBook = bookDatas.find((book, index) => book.id === parseInt(id))
    setIdx(selectBook.id)
    setBookName(selectBook.bookName)
    setAuthor(selectBook.author)
    setLanguage(selectBook.language)
    setDate(selectBook.date)

  }, [id, bookDatas])

  function editBook() {
    const editBookObj = {

      id: idx,
      bookName,
      author,
      language,
      date
    }
    console.log(editBookObj)
    const editIndex = bookDatas.findIndex((book, index) => book.id === parseInt(id));
    bookDatas[editIndex] = editBookObj
    setData([...bookDatas])
    navigate('/')
  }

  return (
    <BasePage>
      <div className="top-0">  <h1 className="text-2xl">Edit Book Enrty</h1></div>
      <div className="form-control space-y-4">
        <label className="input-group">
          <span className="bg-slate-500">ID</span>
          <input type="number" placeholder="123" className="input input-bordered" value={idx} onChange={(e) => setIdx(e.target.value)} />
        </label>
        <label className="input-group">
          <span className="bg-slate-500">BOOKNAME</span>
          <input type="text" placeholder="Kavithai" className="input input-bordered" value={bookName} onChange={(e) => setBookName(e.target.value)} />
        </label>
        <label className="input-group">
          <span className="bg-slate-500">AUTHOR</span>
          <input type="text" placeholder="Bharathi" className="input input-bordered" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label className="input-group">
          <span className="bg-slate-500">LANGUAGE</span>
          <input type="text" placeholder="Tamil" className="input input-bordered" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </label>
        <label className="input-group">
          <span className="bg-slate-500">DATE</span>
          <input type="text" placeholder="00/00/0000" className="input input-bordered" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <button className="btn bg-blue-600" onClick={editBook}>SAVE EDIT</button>
      </div>

    </BasePage>
  )
}