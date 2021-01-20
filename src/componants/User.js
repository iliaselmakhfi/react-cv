import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../img/user.jpeg'

const User = ({user, id:key}) =>  {

  
        return(
            <Fragment>
                <h4>User : matricule {key}</h4>
                <div className='row'>
                    <div className='col-lg-4 border mt-2'>
                        <img src={image} height='100%' width='100%' alt="user"/>
                    </div>
                    <div className='col-lg-8 border mt-2'>
                        <p className='text-center'><b>{user.nom.toUpperCase()} {user.prenom.toUpperCase()}</b></p>
                        <p>Niveau {user.niveauEtude}</p>
                        <p>Né(e) le {user.dateDeNaissance}</p>
                        <p>Biographie : {user.biographie}</p>
                        <p>Compétances : {user.competence}</p>
                    </div>
                </div>
            </Fragment>    
        );
}

export default User