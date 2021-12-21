import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";

function CrearUsuario() {



  const ref_nombre = useRef();
  const ref_apellido = useRef();
  const ref_cargo = useRef();
  const ref_usuario = useRef();
  const ref_constrasena = useRef();

  const [alert, setAlert] = useState(false);




  const guardar_usuario = async() => {
    const nombre = ref_nombre.current.value;
    const apellido = ref_apellido.current.value;
    const cargo = ref_cargo.current.value;
    const usuario = ref_usuario.current.value;
    const contrasena = ref_constrasena.current.value;

    //JSON para enviar a la base de datos

    const user = { "nombre": nombre, "apellido": apellido, "cargo": cargo, "usuario": usuario, "contrasena": contrasena };
    ////////////////////////////////////////////////////
    let status = ""
    await fetch(`http://localhost:8081/crearUsuario`, {
      method: 'POST', // or 'PUT'co
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(dato => dato.json())
      .then(dato => status = dato.msg)
      .catch(error => console.log(error))

    setAlert(status);

    
    ref_nombre.current.value = "";
    ref_apellido.current.value = "";
    ref_cargo.current.value = "";
    ref_usuario.current.value = "";
    ref_constrasena.current.value = "";

    setTimeout(() => {
      setAlert(false)
    }, 3000);


  }
  return (
    <>
      <div className="wrapper ">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <Menu_vertical />
        </div>
        <div className="main-panel">
          {/*<!-- Navbar -->*/}
          <Header />
          {/*<!-- End Navbar -->*/}
          <div className="content">
            <Ir_atras />

            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-body ">
                    {/* aqui comienza el formulario de add materia */}
                    <div className="contenedor">
                      <h4>CREAR USUARIO</h4>
                      <form>
                        <div className="sub-contenedor">
                          <div className="l-col1">
                            <div className="row-add">
                              <label className="addM-label">Nombre</label>
                              <input ref={ref_nombre} id="nombre" />
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Apellido</label>
                              <input ref={ref_apellido} id="descripcion" />
                            </div>

                          </div>

                          <div className="r-col2">
                            <div className="row-add">
                              <label className="addM-label">Cargo</label>
                              {/* <input ref={ref_cargo} id="unidad" /> */}
                              <select ref={ref_cargo}> 
                                 <option value={1}>Administrador</option>
                                 <option value={2}>Usuario inventario</option>
                                 <option value={3}>Usuario produccion</option>
                               </select>
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Usuario</label>
                              <input ref={ref_usuario} id="cantidad" />
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Constraseña</label>
                              <input   ref={ref_constrasena} id="precio" />
                            </div>
                          </div>

                        </div>
                        <div className="botones">
                          <div className="btn-col1">
                            <button id="guardar_mp" type="button" onClick={guardar_usuario}>Guardar</button>
                          </div>
                          <div className="btn-col2">
                            <Link to="/dashboard">
                              <button type="reset" id="Cancelar">Cancelar</button>
                            </Link>

                          </div>

                        </div>
                        {alert && <div><p style={{ textAlign: "center", fontSize: "16px" }}>Se ha añadido correctamente!</p></div>}
                      </form>
                    </div>
                    {/* aqui termina el formulario de add materia */}
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-history"></i> Updated 3 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default CrearUsuario;