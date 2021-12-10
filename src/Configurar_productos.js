import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Ir_atras from './Ir_atras';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useState} from "react";

const lista_mp=["madera tipo 1","madera tipo2","madera tipo 3"];

function Configurar_productos(){
    const ref_nombre_producto=useRef();

    const ref_mp1=useRef();
    const ref_mp2=useRef();
    const ref_mp3=useRef();
    const ref_mp4=useRef();
    const ref_mp5=useRef();

    const ref_cmp1=useRef();
    const ref_cmp2=useRef();
    const ref_cmp3=useRef();
    const ref_cmp4=useRef();
    const ref_cmp5=useRef();

    const guardar_producto=()=>{
       
        var grupo_mp=""

        if(ref_mp1.current.value!="no"&& ref_cmp1.current.value!="0"&&ref_cmp1.current.value!=""){
            grupo_mp=grupo_mp+ref_cmp1.current.value+"-"+ref_mp1.current.value+",";
        }
        if(ref_mp2.current.value!="no"&& ref_cmp2.current.value!="0"&& ref_cmp2.current.value!=""){
            grupo_mp=grupo_mp+ref_cmp2.current.value+"-"+ref_mp2.current.value+",";
        }
        if(ref_mp3.current.value!="no"&& ref_cmp3.current.value!="0"&&ref_cmp3.current.value!=""){
            grupo_mp=grupo_mp+ref_cmp3.current.value+"-"+ref_mp3.current.value+",";
        }
        if(ref_mp4.current.value!="no"&& ref_cmp4.current.value!="0"&&ref_cmp4.current.value!=""){
            grupo_mp=grupo_mp+ref_cmp4.current.value+"-"+ref_mp4.current.value+",";
        }
        if(ref_mp5.current.value!="no"&& ref_cmp5.current.value!="0"&&ref_cmp5.current.value!=""){
            grupo_mp=grupo_mp+ref_cmp5.current.value+"-"+ref_mp5.current.value+",";
        }
        
        if(grupo_mp[grupo_mp.length-1]==","){
            grupo_mp=grupo_mp.slice(0,-1);
        }

        
        //Json para la base de datos

        const producto_json={"nombre":ref_nombre_producto.current.value,"materias_primas":grupo_mp};
        
    }

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
                            <input ref={ref_nombre_producto} id="nombre"/>
                        </div>
                    
                    <div className="sub-contenedor">
                        
                        <div className="l-col1">
                            <h5>Materias Primas</h5>
                            <div >
                                <select ref={ref_mp1} id="mp1">
                                    <option value="no">Seleccione materia prima</option>
                                    {
                                        lista_mp.map(item=>
                                            <option value={item}>{item}</option>
                                            )
                                    }
                                </select>
                            </div>
                            <div >
                                <select ref={ref_mp2} id="mp2">
                                <option value="no">Seleccione materia prima</option>
                                    {
                                        lista_mp.map(item=>
                                            <option value={item}>{item}</option>
                                            )
                                    }
                                </select>
                            </div>
                            <div >
                                <select ref={ref_mp3} id="mp3">
                                <option value="no">Seleccione materia prima</option>
                                    {
                                        lista_mp.map(item=>
                                            <option value={item}>{item}</option>
                                            )
                                    }
                                </select>
                            </div>
                            <div >
                                <select ref={ref_mp4} id="mp4">
                                <option value="no">Seleccione materia prima</option>
                                    {
                                        lista_mp.map(item=>
                                            <option value={item}>{item}</option>
                                            )
                                    }
                                </select>
                            </div>
                            <div >
                                <select ref={ref_mp5} id="mp5">
                                <option value="no">Seleccione materia prima</option>
                                    {
                                        lista_mp.map(item=>
                                            <option value={item}>{item}</option>
                                            )
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="r-col2">
                        <h5>Cantidad</h5>
                            <div className="row-c">
                            <input type="number" value="0" ref={ref_cmp1} id="Cmp1"/>
                            </div>
                            <div className="row-c">
                            <input  ref={ref_cmp2} id="Cmp2"/>
                            </div>
                            <div className="row-c">
                            <input  ref={ref_cmp3} id="Cmp3"/>
                            </div>
                            <div className="row-c">
                            <input  ref={ref_cmp4} id="Cmp4"/>
                            </div>
                            <div className="row-c">
                            <input  ref={ref_cmp5} id="Cmp5"/>
                            </div>
                        </div>

                    </div>
                    <div className="botones">
                            <div className="btn-col1">
                                <button type="button"id="guardar-configuracion" onClick={guardar_producto}>Guardar</button>
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