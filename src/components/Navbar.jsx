import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import {auth} from '../firebase'

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() =>{
                props.history.push('/')
            })
    }
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Administrative System</Link>
                <div>
                    <div className="d-flex">
                        {
                            props.firebaseUser !== null ? (
                                <NavLink className="btn btn-dark mr-2"  to="/admin">
                                Admin
                                </NavLink>
                            ) : null
                        }
                        {
                            props.firebaseUser !== null ? (
                                <button 
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}>
                                Cerrar Secion</button>
                            ): null
                        }
                        
                    </div>
                </div>
        </div>
    );
};

export default withRouter(Navbar)