import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    let arr = JSON.parse(localStorage.getItem("favitem"))||[];
    console.log(arr)

// const item = (item)={
//   const ram = arr.find((ele)=>ele.sno===item.sno);
// }

    // let index = arr.findIndex((ele)=>ele.sno===arr.sno)
    //   console.log(index)

      const addItem = (item) => {
        const existingItem = arr.find((ele) => ele.id === item.id);
        if (!existingItem) {
          arr.push(item);
          localStorage.setItem("favitem", JSON.stringify(arr));
        }
      };

  return (
    <div>
      {arr.map((ele,index)=>{
        return <div className="card mb-3 col-md-9 m-auto">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ele.image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{ele.label}</h5>
        <p className="card-text">{ele.mealType}</p>
        <Link className="btn btn-info" to = {ele.url}> How to make</Link>
      </div>
    </div>
  </div>
</div>

      })}
    </div>
  )
}

export default Wishlist
