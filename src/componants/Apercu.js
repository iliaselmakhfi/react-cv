import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../img/user.jpeg'

const Apercu = ({userTmp}) =>  {

        const {nom,prenom,dateDeNaissance,biographie,niveauEtude,competence} = userTmp

        return(
            <Fragment>
                <h1 className='text-center'>APERCU</h1>
                
                <div className='row'>
                    <div className='col-lg-4 border mt-2'>
                        <img src={image} height='100%' width='100%' alt="user"/>
                    </div>
                    <div className='col-lg-8 border mt-2'>
                        <p className='text-center'><b>{nom ? nom.toUpperCase() : ''} {prenom ? prenom.toUpperCase() : ''}</b></p>
                        <p>Niveau {niveauEtude}</p>
                        <p>Né(e) le {dateDeNaissance}</p>
                        <p>Biographie : {biographie}</p>
                        <p>Compétances : {competence}</p>
                    </div>
                </div>
            </Fragment>    
        );
}

export default Apercu