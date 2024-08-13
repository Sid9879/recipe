import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [items, setitem] = useState([]);
    let searchRef = useRef()
    const [search, setSearch] = useState('search')

    let getRecipe = async()=>{
        // methiod 1 using js
        // let res = await fetch("https://api.edamam.com/search?q=chicken&app_id=2fbd36e2&app_key=56ba86d4682e07c34d8bf532053a7777")
        // let data = await res.json();
        // console.log(data)

        let res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=2fbd36e2&app_key=56ba86d4682e07c34d8bf532053a7777`)

        console.log(res.data.hits)
        setitem(res.data.hits)
        console.log(items)
    }
    useEffect(()=>{
        getRecipe()
    },[search])

    const handlesearch = (e)=>{
      e.preventDefault()
      let search = searchRef.current.value
      console.log(search)
      console.log("hello")
      setSearch(search)
      searchRef.current.value=""
    }
  return (
    <div>
       <form style={{width:"450px"}} className="d-flex m-auto mb-2 mt-2">
        <input ref={searchRef} className="form-control me-2 text-info" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handlesearch} className="btn btn-outline-success text-primary" type="submit">Search</button>
      </form>
     <div className='row m-0 p-0 gap-2 justify-content-center' >
     {items.map((ele,index)=>{
        return <div key={index} className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to="/viewrecipe" state={ele} className="btn btn-primary d-flex justify-content-center">View Recipe</Link>
  </div>
</div>

      })}
     </div>
    </div>
  )
}

export default Home