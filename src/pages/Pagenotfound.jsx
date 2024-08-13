import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const Pagenotfound = () => {
  return (
    <div>
      <Result
    status="404"
    title="404"
    subTitle="Sorry, you are not authorized to access this page."
    
  />
  <div className='row m-auto col-sm-1'><Link to="/" className='btn btn-info'>Back to Home</Link></div>
    </div>
  )
}

export default Pagenotfound
