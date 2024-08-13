import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Wishlist = () => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("favitem")) || []);

  const handleDelete = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
    localStorage.setItem("favitem", JSON.stringify(updatedWishlist));
  };

  
  
  return (
    <div>
      {wishlist.map((ele, index) => (
        <div className="card mb-3 col-md-9 m-auto" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={ele.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ele.label}</h5>
                <p className="card-text">{ele.mealType}</p>
                <Link className="btn btn-info" to={ele.url}>
                  How to make
                </Link>
                <Link
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger ms-3"
                  to=""
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;