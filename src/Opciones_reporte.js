import {Link} from "react-router-dom";

import {rol_user} from "./Header";

//  rol_user controla quien esta manejando la a plicacion
// 1:Admi
// 2:usuario inventario
// 3:usuario produccion

function mostrar_reportes(){
  if(rol_user==1){
    return (
        <>
           <div className="row">
          <Link to="/reportes/mas_vendidas" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-2">
                   
                  </div>
                  <div className="col-7 col-md-10">
                    <div className="numbers">
                      <p className="card-category">Materias Primas</p>
                      <p className="card-title">Más Vendidas</p>
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
          <Link to="/reportes/pedidos-por-despachar" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-2">
                    
                  </div>
                  <div className="col-7 col-md-10">
                    <div className="numbers">
                      <p className="card-category">Pedidos</p>
                      <p className="card-title">Por Despachar</p>
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
          <Link to="/reportes/pedidos-despachados" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-1">
                    
                  </div>
                  <div className="col-7 col-md-12">
                    <div className="numbers">
                      <p className="card-category">Pedidos</p>
                      <p className="card-title">Ya Despachados</p>
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
          <Link to="/list_productos" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-1">
                    
                  </div>
                  <div className="col-7 col-md-12">
                    <div className="numbers">
                      <p className="card-category">Productos</p>
                      <p className="card-title">Configurados Disponibles</p>
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
  else if(rol_user==2){
    return (
      <>
         <div className="row">
        <Link to="/reportes/mas_vendidas" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-2">
                 
                </div>
                <div className="col-7 col-md-10">
                  <div className="numbers">
                    <p className="card-category">Materias Primas</p>
                    <p className="card-title">Más Vendidas</p>
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
        <Link to="/reportes/pedidos-por-despachar" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-2">
                  
                </div>
                <div className="col-7 col-md-10">
                  <div className="numbers">
                    <p className="card-category">Pedidos</p>
                    <p className="card-title">Por Despachar</p>
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
        <Link to="/reportes/pedidos-despachados" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-1">
                  
                </div>
                <div className="col-7 col-md-12">
                  <div className="numbers">
                    <p className="card-category">Pedidos</p>
                    <p className="card-title">Ya Despachados</p>
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
        
        <Link to="/reportes/pedidos-por-despachar" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-2">
                  
                </div>
                <div className="col-7 col-md-10">
                  <div className="numbers">
                    <p className="card-category">Pedidos</p>
                    <p className="card-title">Por Despachar</p>
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
        <Link to="/reportes/pedidos-despachados" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-1">
                  
                </div>
                <div className="col-7 col-md-12">
                  <div className="numbers">
                    <p className="card-category">Pedidos</p>
                    <p className="card-title">Ya Despachados</p>
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
        <Link to="/list_productos" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
          <div className="card card-stats" style={{backgroundColor:"#afffac"}}>
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-1">
                  
                </div>
                <div className="col-7 col-md-12">
                  <div className="numbers">
                    <p className="card-category">Productos</p>
                    <p className="card-title">Configurados Disponibles</p>
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
    return(
      <div>
        Menu no disponible
      </div>
    )
  }
}

function Opciones_reporte(){
    return(
        mostrar_reportes()
    )
}

export default Opciones_reporte;