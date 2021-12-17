import { Link } from "react-router-dom";


export var rol_user=1;
// esta variable controla quien esta manejando la a plicacion
// 1:Admi
// 2:usuario inventario
// 3:usuario produccion

function user(){
        if (rol_user==1){
           return(
            <a className="navbar-brand" >Administrador</a>
           )
        }else if(rol_user==2){
            return (
              <a className="navbar-brand" >Usuario Inventario</a>
            )
        }
        else if(rol_user==3){
          return (
            <a className="navbar-brand" >Usuario Produccion</a>
          )
        }
        else{
          return (
            <a className="navbar-brand" >"USUARIO"</a>
          )
        }
    }


function Header(){
    return(
            <>
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            {user()}
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
                  <i className="nc-icon nc-settings-gear-65">Salir</i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </>
    )
}

export default Header;
 