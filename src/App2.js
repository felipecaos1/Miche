import './App.css';
import { Fragment } from 'react';
import { Link} from "react-router-dom";

function App2() {
  return ( 
  <Fragment>
    <div className="wrapper ">
     <div className="sidebar" data-color="white" data-active-color="danger">
       <div className="logo">
         <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                 MICHE
          {/*<!-- <div className="logo-image-big">
             <img src="../assets/img/logo-big.png">
           </div> -->*/}
         </a>
       </div>
       <div className="sidebar-wrapper">
         <ul className="nav">
           <li className="active ">
 
           <Link to="/index" >
           <i className="nc-icon nc-bank"></i>
               <p>INICIO</p>
           </Link>
 
           </li>
           <li>
             <a href="./icons.html">
               <i className="nc-icon nc-diamond"></i>
               <p>Icons</p>
             </a>
           </li>
           <li>
             <a href="./map.html">
               <i className="nc-icon nc-pin-3"></i>
               <p>Maps</p>
             </a>
           </li>
           <li>
             <a href="./notifications.html">
               <i className="nc-icon nc-bell-55"></i>
               <p>Notifications</p>
             </a>
           </li>
           <li>
             <a href="./user.html">
               <i className="nc-icon nc-single-02"></i>
               <p>User Profile</p>
             </a>
           </li>
           <li>
             <a href="./tables.html">
               <i className="nc-icon nc-tile-56"></i>
               <p>Table List</p>
             </a>
           </li>
           <li>
             <a href="./typography.html">
               <i className="nc-icon nc-caps-small"></i>
               <p>Typography</p>
             </a>
           </li>
           
         </ul>
       </div>
     </div>
     <div className="main-panel">
      {/*<!-- Navbar -->*/}
       <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
         <div className="container-fluid">
           <div className="navbar-wrapper">
             <div className="navbar-toggle">
               <button type="button" className="navbar-toggler">
                 <span className="navbar-toggler-bar bar1"></span>
                 <span className="navbar-toggler-bar bar2"></span>
                 <span className="navbar-toggler-bar bar3"></span>
               </button>
             </div>
             <a className="navbar-brand" href="javascript:;">"USUARIO"</a>
           </div>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-bar navbar-kebab"></span>
             <span className="navbar-toggler-bar navbar-kebab"></span>
             <span className="navbar-toggler-bar navbar-kebab"></span>
           </button>
           <div className="collapse navbar-collapse justify-content-end" id="navigation">
             <form>
               <div className="input-group no-border">
                 <input type="text" value="" className="form-control" placeholder="Buscar..."/>
                 <div className="input-group-append">
                   <div className="input-group-text">
                     <i className="nc-icon nc-zoom-split"></i>
                   </div>
                 </div>
               </div>
               
             </form>
             <ul className="navbar-nav">
               
               <li className="nav-item btn-rotate dropdown">
                 <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i className="nc-icon nc-bell-55"></i>
                   <p>
                     <span className="d-lg-none d-md-block">Some Actions</span>
                   </p>
                 </a>
                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                   <a className="dropdown-item" href="#">Action</a>
                   <a className="dropdown-item" href="#">Another action</a>
                   <a className="dropdown-item" href="#">Something else here</a>
                 </div>
               </li>
               <li className="nav-item">
                 <a className="nav-link btn-rotate" href="javascript:;">
                   <i className="nc-icon nc-settings-gear-65"></i>
                   <p>
                     <span className="d-lg-none d-md-block">Account</span>
                   </p>
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </nav>
      {/*<!-- End Navbar -->*/}
       <div className="content">
         <p>
           ACA VA EL CONTENIDO QUE NECESITAMOS
         </p>
       </div>
       <footer className="footer footer-black  footer-white ">
         <div className="container-fluid">
           <div className="row">
             <nav className="footer-nav">
               <ul>
                 <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                 <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                 <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
               </ul>
             </nav>
             <div className="credits ml-auto">
               <span className="copyright">
                 © <script>
                   document.write(new Date().getFullYear())
                 </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim
               </span>
             </div>
           </div>
         </div>
       </footer>
     </div>
   </div>
   </Fragment>
  );
}

export default App2;
