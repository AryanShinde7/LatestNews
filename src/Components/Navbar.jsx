import React from 'react'
import { useState } from 'react'

function Navbar({setcategory}) {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#">  <span className="badge text-bg-secondary fs-4">World New</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>{setcategory("general")}} >General</div>
        <div className="nav-link" style={{cursor:"pointer"}} onClick={()=>{setcategory("technology")}}>Technology</div>
        <div className="nav-link" style={{cursor:"pointer"}}  onClick={()=>{setcategory("health")}} >Health</div>
        <div className="nav-link" style={{cursor:"pointer"}}  onClick={()=>{setcategory("sports")}}>Sports</div>
        <div className="nav-link" style={{cursor:"pointer"}}  onClick={()=>{setcategory("science")}}>Science</div>
        <div className="nav-link" style={{cursor:"pointer"}}  onClick={()=>{setcategory("business")}}>Business</div>


      </div>
    </div>
  </div>
</nav>  )
}

export default Navbar