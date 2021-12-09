import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';

//necesitamos una funcio que traiga los datos de la materia preima mas vendida 

const mp_mas_vendida={"id":"5353","nombre":"tipo1","descripcion":"cafe prensada","unidad":"m2","cantidad_vendida":"56"};



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
          <div className="card">

              <div className="card-header">
                <h2 className="card-title">Materia Prima Mas vendida</h2>
                <hr/>
              </div>
              <div className="card-body" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                  <div>
                  <h4 className="card-title">Id:</h4>
                  <h4 className="card-title">Nombre:</h4>
                  <h4 className="card-title">Descripción:</h4>
                  <h4 className="card-title">Unidad:</h4>
                  <h4 className="card-title">Cantidad Vendida:</h4>
                  </div>
                  <div>
                  <h4 className="card-title">{mp_mas_vendida.id}</h4>
                  <h4 className="card-title">{mp_mas_vendida.nombre}</h4>
                  <h4 className="card-title">{mp_mas_vendida.descripcion}</h4>
                  <h4 className="card-title">{mp_mas_vendida.unidad}</h4>
                  <h4 className="card-title">{mp_mas_vendida.cantidad_vendida}</h4>
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

export default Listar_materias;