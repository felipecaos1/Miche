import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';


const lista_materias_primas={"id":"5353","nombre":"tipo1","descripcion":"cafe prensada","unidad":"m2","cantidad":"56","precio":"29.000"};

const lista=[lista_materias_primas];

function Listar_materias(){
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
          <div class="card">
              {/* aca empieza la table de materias primas */}
              <div class="card-header">
                <h4 class="card-title"> Lista de Materias Primas</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                        <th>
                        ID
                      </th>
                      <th>
                        Nombre
                      </th>
                      <th>
                        Descripcion
                      </th>
                      <th>
                        Unidad
                      </th>
                      <th >
                        Disponibilidad
                      </th>
                      <th >
                        Precio
                      </th>
                      <th style={{textAlign:"center"}}>
                        Opciones
                      </th>
                    </thead>
                    <tbody>
                      {
                        lista.map(item=>
                          <tr>
                          <td>
                           {item.id}
                          </td>
                          <td>
                          {item.nombre}
                          </td>
                          <td>
                          {item.descripcion}
                          </td>
                          <td>
                          {item.unidad}
                          </td>
                          <td>
                          {item.cantidad}
                          </td>
                          <td >
                          {item.precio}
                          </td>
                          <td style={{textAlign:"center"}}>
                            Editar | eliminar
                          </td>
                        </tr>

                          )
                      }
                     
                      
                    </tbody>
                  </table>
                </div>
              </div>
              {/* aca termina la table de materias primas */}
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

export default Listar_materias;