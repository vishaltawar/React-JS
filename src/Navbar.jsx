import React from 'react';

function Navbar() {
    return  <nav class="navbar navbar-light bg-info">
    <div class="container-fluid">
      <a class="navbar-brand text-light">Movie</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </nav> 
        
}
export default Navbar;