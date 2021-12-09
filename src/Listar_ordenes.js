import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';


function Listar_ordenes(){
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
              {/* aca empieza la table de ordenes */}
              <div class="card-header">
                <h4 class="card-title"> Lista de Ordenes</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                        <th>
                        ID
                      </th>
                      <th>
                        Contenido
                      </th>
                      <th style={{textAlign:"center"}}>
                       Orden Completada?
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         145654
                        </td>
                        <td>
                          1-Guitarra, 2-Tambores
                        </td>
                        <td style={{textAlign:"center"}}>
                         SI
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
              {/* aca termina la table de ordenes */}
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

export default Listar_ordenes;