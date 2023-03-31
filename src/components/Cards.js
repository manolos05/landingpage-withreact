import React from 'react'


const Cards = () => {
    return (

      <div className="row  p-4 d-flex justify-content-center text-center">
        <div className="card mx-2 col-3 p-0 my-2" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-0">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </li>
          </ul>
          <div className="card-footer">
            <a href="#" className="btn btn-primary justify-content-center">Go somewhere</a>
          </div>
        </div>

        <div className="card col-3 p-0 mx-2 my-2" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-0">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </li>
          </ul>
          <div className="card-footer">
            <a href="#" className="btn btn-primary justify-content-center">Go somewhere</a>
          </div>
        </div>

        <div className="card col-3 p-0 mx-2 my-2" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-0">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </li>
          </ul>
          <div class="card-footer">
            <a href="#" className="btn btn-primary justify-content-center">Go somewhere</a>
          </div>
        </div>

        <div className="card col-3 p-0 mx-2 my-2" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-0">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </li>
          </ul>
          <div className="card-footer">
            <a href="#" className="btn btn-primary justify-content-center">Go somewhere</a>
          </div>
        </div>

      </div>
    

    )
}

export default Cards;