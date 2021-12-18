import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";

function Addmateria() {



  const ref_nombre_mp = useRef();
  const ref_descripcion_mp = useRef();
  const ref_unidad_mp = useRef();
  const ref_cantidad_mp = useRef();
  const ref_precio_mp = useRef();

  const [alert, setAlert] = useState(false);




  const guardar_materia_prima = async () => {
    const j_nombre = ref_nombre_mp.current.value;
    const j_descripcion = ref_descripcion_mp.current.value;
    const j_unidad = ref_unidad_mp.current.value;
    const j_cantidad = ref_cantidad_mp.current.value;
    const j_precio = ref_precio_mp.current.value;

    //JSON para enviar a la base de datos

    const item_add_materia = { "nombre": j_nombre, "descripcion": j_descripcion, "unidad": j_unidad, "cantidad": j_cantidad, "precio": j_precio ,"cantidadVendida":0};
    ////////////////////////////////////////////////////
    let status = ""
    await fetch(`http://localhost:8081/agregarMateriaPrima`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(item_add_materia), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(dato => dato.json())
      .then(dato => status = dato.msg)
      .catch(error => console.log(error))

    console.log(status);
    setAlert(status);

    ref_nombre_mp.current.value = "";
    ref_descripcion_mp.current.value = "";
    ref_unidad_mp.current.value = "";
    ref_cantidad_mp.current.value = "";
    ref_precio_mp.current.value = "";

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
                      <h4>AÑADIR MATERIA PRIMA</h4>
                      <form>
                        <div className="sub-contenedor">
                          <div className="l-col1">
                            <div className="row-add">
                              <label className="addM-label">Nombre</label>
                              <input ref={ref_nombre_mp} id="nombre" />
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Decripción</label>
                              <textarea ref={ref_descripcion_mp} id="descripcion" />
                            </div>

                          </div>

                          <div className="r-col2">
                            <div className="row-add">
                              <label className="addM-label">Unidad/Medida</label>
                              <input ref={ref_unidad_mp} id="unidad" />
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Cantidad</label>
                              <input ref={ref_cantidad_mp} id="cantidad" />
                            </div>
                            <div className="row-add">
                              <label className="addM-label">Precio</label>
                              <input ref={ref_precio_mp} id="precio" />
                            </div>
                          </div>

                        </div>
                        <div className="botones">
                          <div className="btn-col1">
                            <button id="guardar_mp" type="button" onClick={guardar_materia_prima}>Guardar</button>
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

export default Addmateria;