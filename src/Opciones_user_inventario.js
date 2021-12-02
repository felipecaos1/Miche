import {Link} from "react-router-dom";

function Opciones_user_inventario(){
    return(
        <>
        <div className="row">
          <Link to="/list_materias" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
        </>
    )
}

export default Opciones_user_inventario;