import BasePage from "./BasePage";
import BookDetails from "./BookDetails";
import Base from "./base";

export default function BookTable({bookDatas, setData}){
    return(
        <BasePage>
        {bookDatas.map((stud,idx)=>(
            <BookDetails
            book={stud}
            bookData={bookDatas}
            setData={setData}
            key={stud.id}/>
        ))}
        </BasePage>
    )
}