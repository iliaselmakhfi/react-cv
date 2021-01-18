import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../img/ilias.jpeg'

const Info = ({logo,titre,diplome}) =>  {

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (err) {
            return require(`../img/ilias.jpeg`)
        }
      }

        return(
            <Fragment>
                <h1 className='text-center'>{titre}</h1>
                
                <div className='row'>
                    <div className='col-lg-4 border mt-2'>
                        <img src={image} height='100%' width='100%' alt="user"/>
                    </div>
                    <div className='col-lg-8 border mt-2'>
                        <p><b>{diplome}</b></p>
                    </div>
                </div>
            </Fragment>    
        );
}

export default Info