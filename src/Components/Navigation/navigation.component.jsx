import './navigation.style.css';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';


const Navigation = () => {

    const logout = () =>{

        console.log("button clicked!!");
        Cookie.remove("AuthToken");

    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movie Mania</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="">What's New</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="">Offers</Link>
                    </li>
                    <li className="nav-item">
                        { 
                            Cookie.get('AuthToken') ?
                            <Link className="nav-link" to="/login"  onClick={()=>logout()} >Logout</Link>
                            :
                            <Link className="nav-link" to="/login">Login</Link>
                        }                    
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navigation;