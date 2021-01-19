import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Formulaire extends Component {   

    

    render(){

        const { handleChange,handleClickInit,handleClickSubmit,userTmp,error} = this.props
        const { nom,prenom,dateDeNaissance,biographie,competence} = userTmp

        return(
            <Fragment>
                <h1 className='text-center'>Formulaire</h1>
                   <div className='row'>
                        <div className='col-lg-6'>
                            <label> Nom : </label>
                        </div>
                        <div className='col-lg-6'>
                            <input className="form-control" type='text' name='nom' onChange={e => handleChange(e)} value={nom ? nom : ''}  maxLength='30'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> Prenom : </label>
                        </div>
                        <div className='col-lg-6'>
                            <input className="form-control" type='text' name='prenom' onChange={e => handleChange(e)} value={prenom ? prenom : ''} maxLength='30'/>
                            <span className='Error'>{error.prenom}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> Date de naissance : </label>
                        </div>
                        <div className='col-lg-6'>
                            <input className="form-control" type='date' name='dateDeNaissance' onChange={e => handleChange(e)}  value={dateDeNaissance ? dateDeNaissance: ''}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> Niveau d'Etude : </label>
                        </div>
                        <div className='col-lg-6'>
                            <select className="form-select" name='niveauEtude' onChange={e => handleChange(e)} defaultValue='null'>
                                <option value='null'>Choisisez...</option>
                                <option value='Bac+1'>Bac+1</option>
                                <option value="Bac+2">Bac+2</option>
                                <option value="Bac+3">Bac+3</option>
                                <option value="Bac+4">Bac+4</option>
                                <option value="Bac+5">Bac+5</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> Biographie : </label>
                        </div>
                        <div className='col-lg-6'>
                            <textarea className="form-control" name='biographie' onChange={e => handleChange(e)} value={biographie ? biographie: ''} maxLength='300'/>
                            <span className='Error'>{error.biographie}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> Competence : </label>
                        </div>
                        <div className='col-lg-6'>
                            <input className="form-control" placeholder="Add tags" type='text' name='competence' onChange={e => handleChange(e)} value={competence ? competence: ''}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <button className="btn btn-success" onClick={() => handleClickSubmit(userTmp)}>Valider</button>
                        </div>
                        <div className='col-lg-6'>
                            <button className="btn btn-warning" onClick={handleClickInit}>Initialiser</button>
                        </div>
                    </div>
                     
            </Fragment>   
        );
    }
}

export default Formulaire