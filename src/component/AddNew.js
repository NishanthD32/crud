import { useState } from "react";
import BasePage from "./BasePage";
import Base from "./base";

export default function AddNew({ bookDatas, setData }) {
  const [id, setId] = useState("")
  const [bookName, setBookName] = useState("")
  const [author, setAuthor] = useState("")
  const [language, setLanguage] = useState("")
  const [date, setDate] = useState("")



  function addnew() {
    const newBookEntry = {
      id: id,
      bookName: bookName,
      author: author,
      language: language,
      date: date
    }
    console.log(newBookEntry)
    setData([...bookDatas, newBookEntry])
    setId("")
    setBookName("")
    setAuthor("")
    setDate("")
  }
  return (
    <BasePage>
      <div className="top-0">  <h1 className="text-2xl">New Book Enrty</h1></div>
      <div className="form-control space-y-4">
        <label className="input-group">
          <span className="bg-slate-500">ID</span>
          <input type="number" placeholder="123" className="input input-bordered" value={id} onChange={(e) => setId(e.target.value)} />
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
        <button className="btn bg-blue-600" onClick={() => addnew()}>ADD NEW</button>
      </div>

    </BasePage>
  )
}