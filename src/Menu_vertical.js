import { Link} from "react-router-dom";

function Menu_vertical(){
    return (
        <>
        <div className="logo">
        <Link to="/dashboard" className="simple-text logo-normal">
                MICHE
         {/*<!-- <div className="logo-image-big">
            <img src="../assets/img/logo-big.png">
          </div> -->*/}
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">

          <Link to="/dashboard" >
          <i className="nc-icon nc-bank"></i>
              <p>INICIO</p>
          </Link>

          </li>
          <li>
            <a href="./icons.html">
              <i className="nc-icon nc-diamond"></i>
              <p>Materias Primas</p>
            </a>
          </li>
          <li>
            <a href="./map.html">
              <i className="nc-icon nc-pin-3"></i>
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="nc-icon nc-bell-55"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li>
            <a href="./user.html">
              <i className="nc-icon nc-single-02"></i>
              <p>User Profile</p>
            </a>
          </li>
          
         
          
        </ul>
      </div>
        </>
    )
}

export default Menu_vertical;