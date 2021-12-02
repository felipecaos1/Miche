import './App.css';
import { Fragment } from 'react';
import { Link} from "react-router-dom";

import Prueba from './Prueba';

function Dashboard() {
  return (
    
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
              <p>Materias Primas</p>
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
        <div className="row">
          
          <Link to="/" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Materias Primas</p>
                      <p className="card-title">Listado</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
               
                <div className="stats">
                  {/* <i className="fa fa-refresh"></i>
                  VER LISTADO */}
                </div>
                
                
              </div>
            </div>
          </Link>
          <Link to="/add_materias"className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Materias Primas</p>
                      <p className="card-title">Añadir</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  {/* <i className="fa fa-calendar-o"></i>
                  Last day */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Materias Primas</p>
                      <p className="card-title">Reportes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  {/* <i className="fa fa-clock-o"></i>
                  In the last hour */}
                </div>
              </div>
            </div>
          </Link>
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <p className="card-title">+45K</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-refresh"></i>
                  Update now
                </div>
              </div>
            </div>
          </div> */}
        </div>
         <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header ">
                <h5 className="card-title">Users Behavior</h5>
                <p className="card-category">24 Hours performance</p>
              </div>
              <div className="card-body ">
                <Prueba/>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-history"></i> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                {/* <h5 className="card-title">Email Statistics</h5>
                <p className="card-category">Last Campaign Performance</p> */}
              </div>
              <div className="card-body ">
               
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-primary"></i> Opened
                  <i className="fa fa-circle text-warning"></i> Read
                  <i className="fa fa-circle text-danger"></i> Deleted
                  <i className="fa fa-circle text-gray"></i> Unopened
                </div>
                <hr/>
                <div className="stats">
                  <i className="fa fa-calendar"></i> Number of emails sent
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-title">NASDAQ: AAPL</h5>
                <p className="card-category">Line Chart with Points</p>
              </div>
              <div className="card-body">
               
              </div>
              <div className="card-footer">
                <div className="chart-legend">
                  <i className="fa fa-circle text-info"></i> Tesla Model S
                  <i className="fa fa-circle text-warning"></i> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check"></i> Data information certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-black  footer-white ">
        <div className="container-fluid">
          <div className="row">
            <div className="credits ml-auto">
              <span className="copyright">
                © 2021, Hecho con <i className="fa fa-heart heart"></i> por el Equipo 2
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>

   
  );
}

export default Dashboard;
