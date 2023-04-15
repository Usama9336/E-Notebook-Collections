import React /*{useEffect}*/ from 'react'
//import { useLocation } from 'react-router-dom';
//import PropTypes from "prop-types";
 //import React ,{Navbar} from "react";
 //className={`nav-link $location.pathname==="/about"?"active":""}`
 const Navbar=(props)=> {
 /*let location=useLocation();   
  React.useEffect(()=>{
    console.log(location.pathname);
   },[location]);*/
  return (
  <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <div className="container-fluid">
   <a className="navbar-brand" href="/">iNotebook</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul style={{}} className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a aria-current="page" href="/">Home</a>
       </li>
       <li className="nav-item">
         <a href="/">About</a>
       </li>
       <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">          
         </a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
           <li><hr className="dropdown-divider"/></li>
           <li><a className="dropdown-item" href="/">Something else here</a></li>
         </ul>
       </li>
       <li className="nav-item">
        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
      </li>
     </ul>
     <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
   </div>
 </div>
 </nav>
 </>
     );
 }
// Navbar.propTypes={
//   //can use proptypes.isrequired
//   title:PropTypes.string,
//   about:PropTypes.string
// }
// //default proptype
// //gives default values
// //Navbar.defaultProps={
//   //title:'Set',
//   //about:'Here'
// //}

/*import React from 'react'

export const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}*/
export default Navbar;

