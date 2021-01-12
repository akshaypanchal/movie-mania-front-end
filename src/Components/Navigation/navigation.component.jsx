import './navigation.style.css';

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">What's New</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Offers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navigation;