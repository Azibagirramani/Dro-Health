import { Link } from "react-router-dom"

function Main() {
  return (
    <div className="container-fluid">
      <div className="main-row row vh-100">
        <div className="left-column col-md-6 d-flex align-items-center justify-content-center">
          <div className="card w-75 h-50">
            <div className="card-body d-flex align-items-center justify-content-center">
              <h1><Link to="/movies" >Movies</Link></h1>
            </div>
          </div>
        </div>
        <div className="right-column col-md-6 d-flex align-items-center justify-content-center">
          <div className="card w-75 h-50">
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <h1><Link to="/books">Boooks</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
