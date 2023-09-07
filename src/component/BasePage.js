import { useNavigate } from "react-router-dom";
import BookDetails from "./BookDetails";

export default function BasePage({ children }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="navbar bg-indigo-600">
        <div className="flex-1">
          <a className="text-white normal-case text-xl">BOOK ENRTY</a>
        </div>
        <div className="flex-none text-white">
          <button className="btn btn-square btn-ghost" onClick={() => navigate("/")}>HOME</button>
          <button className="btn btn-square btn-ghost" onClick={() => navigate("/addnew/")}>ADD NEW</button>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="grid h-full card bg-base-300 rounded-box place-items-center">{children}</div>
      </div>
    </div>
  )
}