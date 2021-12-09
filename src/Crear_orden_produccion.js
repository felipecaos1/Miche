import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Crear_orden_produccion(){
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
          <Ir_atras/>

         <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body ">
                  {/* aqui comienza el formulario de add materia */}
              <div className="contenedor">
                    <h4>Crear orden de produccion</h4>
                    <form>
                    
                        <div className="row-add nombre-producto">
                            <label className="addM-label">Codigo de la orden</label>
                            <input id="codigo-orden"/>
                            <label className="addM-label">Destino de la orden</label>
                            <input id="destino-orden"/>
                        </div>
                    
                    <div className="sub-contenedor">
                        
                        <div className="l-col1">
                            <h5>Productos</h5>
                            <div >
                                <select id="p1">
                                    <option>Seleccione Producto</option>
                                </select>
                            </div>
                            <div >
                                <select id="p2">
                                    <option>Seleccione Producto</option>
                                </select>
                            </div>
                           
                        </div>

                        <div className="r-col2">
                        <h5>Cantidad</h5>
                            <div className="row-c">
                            <input id="Cp1"/>
                            </div>
                            <div className="row-c">
                            <input id="Cp2"/>
                            </div>
                            
                        </div>

                    </div>
                    <div className="botones">
                            <div className="btn-col1">
                                <button id="validar">Validar orden</button>
                            </div>   
                            <div className="btn-col2">
                                <Link to="/dashboard">
                                <button type="reset" id="Cancelar-orden">Cancelar</button>
                                </Link> 
                            </div>      

                    </div>
                    </form>
                    <div>
                        <p id="mensaje" style={{textAlign:"center"}}></p>
                    </div>
                </div>
                {/* aqui termina el formulario de add materia */}
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
      </div>
      <Footer/>
    </div>
  </div>
            
        </>
    )
}

export default Crear_orden_produccion;