import React from 'react';
import {withRouter} from 'react-router-dom'
import {auth} from '../firebase'

const Admin = (props) => {

        const [user, setUser] = React.useState(null)

        React.useEffect( () => {
            if(auth.currentUser){
                console.log('existe');
                setUser(auth.currentUser)                
            } else{
                console.log('no existe');
                props.history.push('/login')                
            }
        },[props.history])

    return (
        <div>
            <h2>Usuario Activo</h2>
            {
                user && (
                    <h3>{user.email}</h3>
                )
            }
        </div>
    );
};

export default withRouter(Admin)