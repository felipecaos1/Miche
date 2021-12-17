import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import React from 'react';


// const productos_configurados = { "nombre": "Guitarra", "materias_primas": "1-madera tipo 1,2-madera tipo2" };
// const lista_p = [productos_configurados, productos_configurados];

function Crear_orden_produccion() {

    const ref_codigo_op = useRef();
    const ref_destino_op = useRef();
    const ref_cantidad_1 = useRef();
    const ref_cantidad_2 = useRef();
    const ref_producto_1 = useRef();
    const ref_producto_2 = useRef();

    const [alerto, setAlerto] = useState(false);
    const [lista_p, setLista] = useState([]);

    React.useEffect(() => {
        actualizar_lista();
    }, [])

    const actualizar_lista = async () => {
        const temp = [];
        await fetch(`http://localhost:8081/listarProductos`)
            .then(res => res.json())
            .then(res => {
                for (const iterator of res) {
                    temp.push(iterator);
                }
            })
            .catch(err => alert(err))
        setLista(temp);
    }



    const validar_orden = () => {

        //1. traer los dos productos seleccionados y la cantidad
        const producto1 = ref_producto_1.current.value;
        const producto2 = ref_producto_2.current.value;

        const cantidad1 = parseInt(ref_cantidad_1.current.value);
        const cantidad2 = parseInt(ref_cantidad_2.current.value);

        //2. consultar que materia prima los compone 
        if (producto1 != "no") {

            const producto_seleccionado = lista_p.find(item => item.nombre == producto1);

            const materias_primas2 = producto_seleccionado.materias_primas.split(",");

            var contador = 0;
            var costo = 0;
            for (var i = 0; i < materias_primas2.length; i++) {

                const x = materias_primas2[i].split("-")

                //3. validar en la base de tados que esa materia prima este disponible
                // consultar en la base de datos por su nombre (x[1]) una materia prima especifica y traer su cantidad disponible para comparar con la cantidad que se solicita para el pediddo y ademas el costpo de esta materia prima

                /* if(x[0]*cantidad1<cantidad disponible de esa meteria prima){
                    contador++;
                    costo=costo+x[0]*cantidad1*preciodelametriaprima;
                }
                

                */


            }

            /* if(contador==materias_primas2.length){
                este producto si se puede realizar porque el inventario cuenta con las materias primas necesarias
            } */


        }
        if (producto2 != "no") {
            /* repetir lo mismo del primer producto*/
        }

        //4. agregar la orden a la basede da datos 
        //preparamos el json para enviar a la base de datos 
        var fecha = new Date();
        const orden = { "contenido": cantidad1.toString() + "-" + producto1, "destino": ref_destino_op.current.value, "costo": "50.000", "fecha_creacion": fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear() }
        


        //5. descontar en la base de datos la materia prima consumida


        ////////////////////////////////////////////////////

        //mostrar mensaje de que se añadio o que no se puedo añadir y limpiar el formulario para una proxima orden
        setAlerto(true);
        setTimeout(() => {
            setAlerto(false)
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
                                            <h4>Crear orden de produccion</h4>
                                            <form>

                                                <div className="row-add nombre-producto">
                                                    <label className="addM-label">Codigo de la orden</label>
                                                    <input ref={ref_codigo_op} id="codigo-orden" />
                                                    <label className="addM-label">Destino de la orden</label>
                                                    <input ref={ref_destino_op}
                                                        id="destino-orden" />
                                                </div>

                                                <div className="sub-contenedor">

                                                    <div className="l-col1">
                                                        <h5>Productos disponibles</h5>
                                                        <div >
                                                            <select ref={ref_producto_1} id="p1">
                                                                <option value="no">selecione producto</option>
                                                                {
                                                                    lista_p.map(item =>

                                                                        <option value={item._id}>{item.nombre}</option>
                                                                    )
                                                                }

                                                            </select>
                                                        </div>
                                                        <div >
                                                            <select ref={ref_producto_2} id="p2">
                                                                <option value="no">selecione producto</option>
                                                                {
                                                                    lista_p.map(item =>

                                                                        <option value={item._id}>{item.nombre}</option>
                                                                    )
                                                                }

                                                            </select>
                                                        </div>

                                                    </div>

                                                    <div className="r-col2">
                                                        <h5>Cantidad</h5>
                                                        <div className="row-c">
                                                            <input ref={ref_cantidad_1} id="Cp1" />
                                                        </div>
                                                        <div className="row-c">
                                                            <input ref={ref_cantidad_2} id="Cp2" />
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="botones">
                                                    <div className="btn-col1">
                                                        <button type="button" onClick={validar_orden} id="validar">Validar orden</button>
                                                    </div>
                                                    <div className="btn-col2">
                                                        <Link to="/dashboard">
                                                            <button type="reset" id="Cancelar-orden">Cancelar</button>
                                                        </Link>
                                                    </div>

                                                </div>
                                                {alerto && <div><p>La orden se ha añadido satisfactoriamente</p></div>}
                                            </form>
                                            <div>
                                                <p id="mensaje" style={{ textAlign: "center" }}></p>
                                            </div>
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

export default Crear_orden_produccion;