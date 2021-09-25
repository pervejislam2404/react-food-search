import React from 'react';

const Header = (props) => {
    return (
     <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
       <div className="container-fluid">
    
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item px-5"> item one </li>
           <li className="nav-item px-5">item two</li>
           <li className="nav-item px-5">item three</li>
        </ul>
      <form className="d-flex">
        <input onChange={props.handle} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div> 
      </nav>   
       
      
      
        
       </div>
   
       
    );
};

export default Header;