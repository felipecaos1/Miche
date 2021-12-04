import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';

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
          <Ir_atras/>

         <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body ">
                  {/* aqui comienza el formulario de add materia */}
              <div className="contenedor">
                    <h4>AÑADIR MATERIA PRIMA</h4>
                    <form>
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

export default Addmateria;