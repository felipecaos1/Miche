import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Configurar_productos(){
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
                    <h4>Configuración de Productos</h4>
                    <form>
                    
                        <div className="row-add nombre-producto">
                            <label className="addM-label">Nombre del producto</label>
                            <input id="nombre"/>
                        </div>
                    
                    <div className="sub-contenedor">
                        
                        <div className="l-col1">
                            <h5>Materias Primas</h5>
                            <div >
                                <select id="mp1">
                                    <option>Seleccione materia prima</option>
                                </select>
                            </div>
                            <div >
                                <select id="mp2">
                                    <option>Seleccione materia prima</option>
                                </select>
                            </div>
                            <div >
                                <select id="mp3">
                                    <option>Seleccione materia prima</option>
                                </select>
                            </div>
                            <div >
                                <select id="mp4">
                                    <option>Seleccione materia prima</option>
                                </select>
                            </div>
                            <div >
                                <select id="mp5">
                                    <option>Seleccione materia prima</option>
                                </select>
                            </div>
                        </div>

                        <div className="r-col2">
                        <h5>Cantidad</h5>
                            <div className="row-c">
                            <input id="Cmp1"/>
                            </div>
                            <div className="row-c">
                            <input id="Cmp2"/>
                            </div>
                            <div className="row-c">
                            <input id="Cmp3"/>
                            </div>
                            <div className="row-c">
                            <input id="Cmp4"/>
                            </div>
                            <div className="row-c">
                            <input id="Cmp5"/>
                            </div>
                        </div>

                    </div>
                    <div className="botones">
                            <div className="btn-col1">
                                <button id="guardar-configuracion">Guardar</button>
                            </div>   
                            <div className="btn-col2">
                                <Link to="/dashboard">
                                <button type="reset" id="Cancelar">Cancelar</button>
                                </Link>
                                
                            </div>      

                    </div>
                    </form>
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

export default Configurar_productos;