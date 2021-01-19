import React, { Component, Fragment } from 'react'
import Info from './Info'
import 'bootstrap/dist/css/bootstrap.min.css'

class Formulaire extends Component {   

    render(){

        const { handleChangeTitre,handleChangeDiplome,titre,diplome} = this.props

        return(
            <Fragment>
                <h4>Formulaire :</h4>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label> Fonction Actuelle : </label>
                    </div>
                    <div className='col-lg-6'>
                        <input className="form-control" type='text' onChange={handleChangeTitre} value={titre}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label> Diplome : </label>
                    </div>
                    <div className='col-lg-6'>
                        <input className="form-control" type='text' onChange={handleChangeDiplome} value={diplome}/>
                    </div>
                </div>  
            </Fragment>   
        );
    }
}

export default Formulaire