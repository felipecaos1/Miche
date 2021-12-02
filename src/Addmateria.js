import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Opciones_user_inventario from './Opciones_user_inventario';
import Footer from './Footer';

function Addmateria(){
    return(
        <>
        <div className="wrapper ">
    <div className="sidebar" data-color="white" data-active-color="danger">
      <Menu_vertical/>
    </div>
    <div className="main-panel">
     {/*<!-- Navbar -->*/}
      <Header/>
     {/*<!-- End Navbar -->*/}
      <div className="content">
          <Opciones_user_inventario/>

         <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body ">
              <div className="contenedor">
                <h2>AÑADIR MATERIA PRIMA</h2>
                <div className="sub-contenedor">
                    <div className="l-col1">
                        <div className="row-add">
                        <label className="addM-label">Nombre</label>
                        <input id="nombre"/>
                        </div>
                        <div className="row-add">
                        <label className="addM-label">Decripción</label>
                        <textarea id="descripcion"/>
                        </div>
                        
                    </div>

                    <div className="r-col2">
                    <div className="row-add">
                        <label className="addM-label">Unidad/Medida</label>
                        <input id="unidad"/>
                        </div>
                        <div className="row-add">
                        <label className="addM-label">Cantidad</label>
                        <input id="cantidad"/>
                        </div>
                        <div className="row-add">
                        <label className="addM-label">Precio</label>
                        <input id="precio"/>
                        </div>
                    </div>

                </div>
                <div className="botones">
                        <div className="btn-col1">
                            <button id="guardar">Guardar</button>
                        </div>   
                        <div className="btn-col2">
                            <button id="Cancelar">Cancelar</button>
                        </div>      

                </div>
            </div>
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
      <Footer/>
    </div>
  </div>
            
        </>
    )
}

export default Addmateria;