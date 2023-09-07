import { useNavigate } from "react-router-dom"

export default function BookDetails({ book, bookData, setData }) {
  const removeData = (id) => {
    const newBookData = bookData.filter((book, idx) => book.id !== id)
    setData(newBookData)
  }
  const navigate = useNavigate()
  return (
    <div className="justify-evenly">
      <div className="card w-64 bg-slate-800 shadow-xl p-1">
        <div className="card-body text-slate-200">
          <h2 className="card-title">Book ENRTY</h2>
          <p><b>Book: </b>{book.bookName}</p>
          <p><b>Author: </b>{book.author}</p>
          <p><b>Language: </b>{book.language}</p>
          <p><b>Date: </b>{book.date}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-600" onClick={() => navigate(`/editpage/${book.id}`)}>Edit</button>
            <button className="btn bg-red-600" onClick={() => removeData(book.id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}