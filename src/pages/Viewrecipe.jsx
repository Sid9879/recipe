import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Viewrecipe = () => {

  let arr = JSON.parse(localStorage.getItem("favitem"))||[];

   const location = useLocation()
   console.log(location.state.recipe)
   let data = location.state.recipe

const handlewishlist = () =>{
  console.log(data)
  // Add to wishlist logic here using local storage
  arr.push(data)
  console.log(arr)
  localStorage.setItem("favitem", JSON.stringify(arr))
}
  return (
    <div>
   <div className="card mb-3" style={{}}>
  <div className="row g-0">
    <div className="col-md-4 p-2 ">
      <img src={location.state.recipe.image} style={{height:"400px", width:"400px"}} className="col-md-12 rounded-start rounded-start " alt="..." />
    </div>
    <div className="col-md-8">

      <div className="card-body">
        <h5 className="card-title">{location.state.recipe.label}</h5>
        <p className="card-text">{location.state.recipe.mealType}</p>
        <Link to = {data.url} className='btn btn-danger'>How to Make</Link>
        <Link onClick={handlewishlist} className='btn btn-success ms-3' to = "/wishlist">Wishlist</Link>
        <div className='row gap-2 mt-4'>
            <div className='col-sm-3 border border-primary p-4 text-center '>
                <h6>Sugar</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.SUGAR.unit}</span>
            </div>
            
            <div className='col-sm-3 border border-primary p-4 text-center'>
            <h6>Cholestrol</h6>
            <span>{Math.ceil(location.state.recipe.totalNutrients.CHOLE.quantity)}</span>
            <span>{location.state.recipe.totalNutrients.CHOLE.unit}</span>
            </div>
            <div className='col-sm-3 border border-primary p-4 text-center'>
                <h6>Fat</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.FAT.unit}</span>
            </div>
            <div className='col-sm-3 border border-primary p-4 text-center'>
                <h6>Calcium</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.CA.unit}</span>
                
            </div>
            <div className='col-sm-3 border border-primary p-4 text-center'>
                <h6>Fiber</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.FE.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.FE.unit}</span>
                </div>
            <div className='col-sm-3 border border-primary p-4 text-center'>
                <h6>Vitamin</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.
VITB12
.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.
VITB12
.unit}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ul>
  <b>Ingredient</b>    
    {data.ingredientLines.map((ele,index)=>{
        return <li key={index}>{ele}</li>
    })}
</ul>

    </div>
  )
}

export default Viewrecipe
