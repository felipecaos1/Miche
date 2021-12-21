import { Link } from "react-router-dom";
import { useRef } from "react";



function Login() {
    const ref_usuario = useRef();
    const ref_contraseña = useRef();



    const validar = async () => {
        const usuario = ref_usuario.current.value;
        const contraseña = ref_contraseña.current.value;
        await fetch(`http://localhost:8081/validarUsuario`, {
            method: 'POST',
            body: JSON.stringify({ "usuario": usuario, "contrasena": contraseña }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dato => dato.json())
            .then(dato => {
                if (dato.validacion) {
                    { window.location.href = "/dashboard" }
                } else {
                    alert("Usuario y contraseña invalido")
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="container" style={{ paddingTop: "50px" }}>
            <div className="text-miche">
                <a ><img src="assets/img/logo.png" alt="" width="80" /></a>
                <h1>Bienvenido a Miche</h1>
                <h5> Éste es un Sistema de Gestión de Inventario Musical en donde podrás consultar la disponibilidad de materia prima para la producción de tus instrumentos musicales, al igual que gestionar los pedidos realizados por clientes.</h5>
                <h5>En Miche nos especializamos en la producción de instrumentos musicales de calidad desde 1980, hasta la fecha, contando con gran experiencia en el mercado a través de clientes que nos avalan.</h5>
            </div>

            <div>
                <div class="login" style={{ backgroundColor: "rgba(0,0,0,0.8)", padding: "20px" }}>
                    <h1 style={{ color: "#fff" }}>Login</h1>
                    <form method="POST">
                        <input ref={ref_usuario} type="text" name="u" placeholder="Username" required="required" />
                        <input ref={ref_contraseña} type="password" name="p" placeholder="Password" required="required" />
                        <button type="button" class="btn btn-primary btn-block btn-large" onClick={validar}>Ingresar</button>
                    </form>

                </div>
            </div>



        </div>


    )
}

export default Login;