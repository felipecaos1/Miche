import './App.css';

import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Opciones from './Opciones';
import Footer from './Footer';




function Dashboard() {
  return (
    
   <div className="wrapper ">
    <div className="sidebar" data-color="white" data-active-color="danger">
      <Menu_vertical/>
    </div>
    <div className="main-panel">
     {/*<!-- Navbar -->*/}
      <Header/>
     {/*<!-- End Navbar -->*/}
      <div className="content">
          <Opciones/>

         <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body ">
                <h2>BIENVENIDO A TU ESCRITORIO</h2>
                <h4>Miche</h4>
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
                 <h5 className="card-title">Perfil</h5>
                <p className="card-category">Actualiza tu perfil</p> 
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
                <h5 className="card-title">Noticias</h5>
                <p className="card-category">Reporte de notificaciones </p>
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
      <Footer/>
    </div>
  </div>

   
  );
}

export default Dashboard;
