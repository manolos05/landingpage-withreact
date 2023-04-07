import React from 'react'


const Cards = () => {

      let cards = [ 
        {
          img: "https://picsum.photos/200/300",
         title: "Card title",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
          img: "https://picsum.photos/200/300",
         title: "Card title",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
          img: "https://picsum.photos/200/300",
         title: "Card title",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
         },
         {
          img: "https://picsum.photos/200/300",
         title: "Card title",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
         }
      ]
  
    return (

      <div className="row  p-4 d-flex justify-content-center text-center">
        
          {cards.map(({img, title, description}, i) => {
            return (
              <div className="card mx-2 col-3 p-0 my-2" key={i} style={{ width: "18rem" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-0">
                  <img src={img} className="card-img-top" alt="..." />
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </li>
              </ul>
              <div className="card-footer">
                <a href="#" className="btn btn-primary justify-content-center">Go somewhere</a>
              </div>
            </div>

            )
          
            })}
        
    

      </div>
    

    )
}

export default Cards;