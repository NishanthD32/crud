import logo from './logo.svg';
import './App.css';
import BasePage from './component/BasePage';
import { useState } from 'react';
import Base from './component/base';
import BookTable from './component/BookTable';
import BookDetails from './component/BookDetails';
import { Route, Routes } from 'react-router-dom';
import AddNew from './component/AddNew';
import EditPage from './component/EditPage';

function App() {
  const bookData = [
    {
      id: 1,
      bookName: "Don't Believe Everything You Think",
      author: "Joseph Nguyen ",
      language: "English",
      date: "13/06/2023",
    },
    {
      id: 2,
      bookName: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      language: "English",
      date: "14/06/2023",
    },
  ]

  const [data, setData] = useState(bookData)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<BookTable
          bookDatas={data}
          setData={setData} />} />
        <Route path='/addnew/' element={<AddNew
          bookDatas={data}
          setData={setData} />} />
        <Route path='/editpage/:id' element={<EditPage
          bookDatas={data}
          setData={setData} />} />
      </Routes>
    </div>
  );
}

export default App;
