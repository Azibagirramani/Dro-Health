import BooksSvg from "../assets/imgs/books.png";

function BookListing(props: any): JSX.Element {
  return (
    <>
      <div
        className="card-content card"
      >
        <div className="card-body text-center mt-3">
          <img className="img-fluid mb-2" alt="books" src={BooksSvg} />
          <p className="">{props.book.name}</p>
        </div>
        <div className="card-footer ">
          <div className="mt-3 d-flex justify-content-between">
            <p className="">Publisher: {props.book.publisher}</p>
            <p className="text-mute fw-bold text-uppercase">isbn: {props.book.isbn}</p>
          </div>
        </div>
        <div className="card-body">
          Authors {
            props.book.authors.map((items: string)=> {
              return <li className="ms-3">{items}</li>
            })
          }
        </div>
      </div>
    </>
  );
}

export default BookListing;
