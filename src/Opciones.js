import {Link} from "react-router-dom";

import {rol_user} from "./Header";


//  rol_user controla quien esta manejando la a plicacion
// 1:Admi
// 2:usuario inventario
// 3:usuario produccion

function user_opciones(){
  if (rol_user==1){
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
                  <p className="card-title">Listado</p>
                    <p className="card-category">Ordenes</p>
                   
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
                    <p className="card-title">Añadir</p>
                      <p className="card-category">Ordenes</p>
                      
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
          <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-3">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-9">
                    <div className="numbers">
                    <p className="card-title">Configurar</p>
                      <p className="card-category">Productos</p>
                     
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
          <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
                    <p className="card-title">Reportes</p>
                      <p className="card-category">Ver</p>
                      
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
      </div>
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
                    <p className="card-title">Listado</p>
                      <p className="card-category">Materias Primas</p>
                      
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
                      <p className="card-title">Añadir</p>
                      <p className="card-category">Materias Primas</p>
                      
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
          <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
                      <p className="card-title">Reportes</p>
                      <p className="card-category">Materias Primas</p>
                      
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
          </div>
          <div className="row">
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
                     <p className="card-title">Crear</p>
                      <p className="card-category">Usuarios</p>
                      
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
          <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
                      <p className="card-title">Ver</p>
                      <p className="card-category">Usuarios</p>
                      
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
          </div>
      </>
     )
  }else if(rol_user==2){
      return (
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
                    <p className="card-title">Listado</p>
                      <p className="card-category">Materias Primas</p>
                      
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
                    <p className="card-title">Añadir</p>
                      <p className="card-category">Materias Primas</p>
                      
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
          <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
                    <p className="card-title">Reportes</p>
                      <p className="card-category">Materias Primas</p>
                     
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
          </div>
        </>
      )
  }
  else if(rol_user==3){
    return (
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
              <p className="card-title">Listado</p>
                <p className="card-category">Ordenes</p>
               
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
              <p className="card-title">Añadir</p>
                <p className="card-category">Ordenes</p>
               
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
    <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row">
            <div className="col-5 col-md-3">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-vector text-danger"></i>
              </div>
            </div>
            <div className="col-7 col-md-9">
              <div className="numbers">
              <p className="card-title">Configurar</p>
                <p className="card-category">Productos</p>
               
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
    <Link to="/reportes" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
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
              <p className="card-title">Reportes</p>
                <p className="card-category">Ver</p>
               
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
    </div>
    </>
    )
  }
  else{
    return (
      <a className="navbar-brand" >"USUARIO"</a>
    )
  }
}

function Opciones(){
    return(
          user_opciones()
    )
}

export default Opciones;