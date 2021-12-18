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



    const validar_orden = async () => {

        //1. traer los dos productos seleccionados y la cantidad
        let validacionOrden = null;
        var nomMateria1 = ref_producto_1.current.value;
        var nomMateria2 = ref_producto_2.current.value;
        var producto1 = "";
        var producto2 ="";

        for (const iterator of lista_p) {
            if(iterator["nombre"]===nomMateria1){
                producto1 = iterator["materias_primas"]
            }
            if(iterator["nombre"]===nomMateria2){
                producto2 = iterator["materias_primas"]
            }
        }

        

        const cantidad1 = parseInt(ref_cantidad_1.current.value);
        const cantidad2 = parseInt(ref_cantidad_2.current.value);

        
        
        var MatariasPrimasRequeridas = {}
        var MatariasPrimasRequeridas2 = {}
        var temp;
        var listemp = producto1.split(",")
        var listemp2 = producto2.split(",")

        listemp.forEach(element => {
            temp = element.split("-")
            MatariasPrimasRequeridas[temp[1]] = (parseInt(temp[0]) * parseInt(cantidad1));
        });
        listemp2.forEach(element => {
            temp = element.split("-")
            MatariasPrimasRequeridas2[temp[1]] = (parseInt(temp[0]) * parseInt(cantidad2));
        });

        for (let i in MatariasPrimasRequeridas2) {
            if (i in MatariasPrimasRequeridas) {
                MatariasPrimasRequeridas[i] = MatariasPrimasRequeridas[i] + MatariasPrimasRequeridas2[i];
            } else {
                MatariasPrimasRequeridas[i] = MatariasPrimasRequeridas2[i];
            }
        }
        //2. consultar que materia prima los compone 
        var faltante = 0;
        var nameMateriFaltante = "";
        await fetch(`http://localhost:8081/validarOrdenProducion`, {
            method: 'POST',
            body: JSON.stringify(MatariasPrimasRequeridas), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dato => dato.json())
            .then(dato => [validacionOrden, nameMateriFaltante, faltante] = [dato.mensage, dato.NomMateria, dato.cantidadFaltante])
            .catch(error => console.log(error))
        //4. agregar la orden a la basede da datos 
        //preparamos el json para enviar a la base de datos
        if (validacionOrden) {
            for( let i in MatariasPrimasRequeridas){
                await fetch(`http://localhost:8081/descontarInventario`, {
                    method: 'POST',
                    body: JSON.stringify({"nombre":i,"cantidad":MatariasPrimasRequeridas[i]}), // data can be `string` or {object}!
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(dato => dato.json())
                    .then(dato =>console.log(dato))
                    .catch(error => console.log(error))
            }

            var fecha = new Date();
            const orden = { "contenido": cantidad1.toString() + "-" + nomMateria1 + " , " + cantidad2.toString() + "-" + nomMateria2, "destino": ref_destino_op.current.value, "costo": "50.000", "fecha_creacion": fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear(),"fecha_de_despacho":fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear(),"despachado":false,"estado":"sin producir" }
            await fetch(`http://localhost:8081/GuardarOrden`, {
                    method: 'POST',
                    body: JSON.stringify(orden), // data can be `string` or {object}!
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(dato => dato.json())
                    .then(dato =>console.log(dato))
                    .catch(error => console.log(error))
        } else {
            alert("No se puede cumplir la orden hace falta: " + faltante + " : " + nameMateriFaltante)
        }

        //5. descontar en la base de datos la materia prima consumida


        ////////////////////////////////////////////////////

        //mostrar mensaje de que se añadio o que no se puedo añadir y limpiar el formulario para una proxima orden
        setAlerto(validacionOrden);
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

                                                                        <option value={item.nombre}>{item.nombre}</option>
                                                                    )
                                                                }

                                                            </select>
                                                        </div>
                                                        <div >
                                                            <select ref={ref_producto_2} id="p2">
                                                                <option value="no">selecione producto</option>
                                                                {
                                                                    lista_p.map(item =>

                                                                        <option value={item.nombre}>{item.nombre}</option>
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