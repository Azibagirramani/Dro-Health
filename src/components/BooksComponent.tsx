import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Books from "../services/Books";
import BookListing from "./BooksListing";

interface ItemsInterface {
  name: string;
  authors: string[];
  country: string;
  characters: string[];
  isbn: string;
  publisher: string;
  released: string;
  url: string;
  numberOfPages: number;
  mediaType: string;
  povCharacters: string[];
}

function BooksComponent() {
  const [books, setBooks] = useState<ItemsInterface[]>([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");

  // const searchFunction = (books: any)  {
  //   return books.filter((items: ItemsInterface) => {
  //     return items.name.toLowerCase().includes(search.toLowerCase());
  //   });
  // };

  useEffect(() => {
    async function fetctBooks() {
      const data = await Books.get_books();
      setBooks(data);
      setLoader(false);
    }

    fetctBooks();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h1 className="fs-1 fw-bold">Books</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fs-5 mt-3">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li
              className="breadcrumb-item active text-primary"
              aria-current="page"
            >
              Books
            </li>
          </ol>
        </nav>
        <h5 className="text-mute fw-light fs-5 col-6 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore error
          excepturi non laborum, provident mollitia maiores autem voluptatibus?
        </h5>
        <div className="my-5">
          <div className="my-3">
            {search ? <p className="fs-1">Search: {search}</p> : ""}
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e)=> { setSearch(e.target.value) }}
              className="form-control"
              placeholder="Enter key work"
            />
          </div>
          {loader ? (
            "Loading content"
          ) : (
            <div className="row row-cols-3 gy-5">
              {books.filter((filteredItems=> {
               return filteredItems.name.toLowerCase().includes(search.toLowerCase());
              })).map((items: ItemsInterface, index) => {
                return (
                  <div className="col">
                    <BookListing book={items} key={index} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BooksComponent;
