import './navigation.style.css';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { useSelector } from "react-redux";
import {removeUserDataFromStore} from '../../actions/actions';
import {useDispatch} from 'react-redux';

const Navigation = () => {

    const dispatch = useDispatch("");
    const user = useSelector(state => state.user);

    console.log("user in navigation", user);

    const logout = () => {

        Cookie.remove("AuthToken");
        dispatch(removeUserDataFromStore());
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light overflow-hidden">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movie Mania</a>

                {
                    Object.keys(user).length > 0 ?
                        <p className=" nav nav-item">Hello! {user.firstName} {user.lastName}</p>
                        : null
                }

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
                                <Link className="nav-link" to="/login" onClick={() => logout()} >Logout</Link>
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