import BasePage from "./BasePage";
import BookDetails from "./BookDetails";

export default function Base({book}){
    return(
        <BasePage>
        <BookDetails
        book={book}/>
        </BasePage>
    )
}