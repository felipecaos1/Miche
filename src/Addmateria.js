

function Addmateria(){
    return(
        <>
            <div className="contenedor">
                <h2>AÑADIR MATERIA PRIMA</h2>
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
                            <button id="Cancelar">Cancelar</button>
                        </div>      

                </div>
            </div>
        </>
    )
}

export default Addmateria;