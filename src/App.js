import React, { Component } from 'react'
import Formulaire from './componants/Formulaire'
import Info from './componants/Info'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {

  state = {
    error : {
      prenom: '',
      biographie: ''
    },
    users : {
    },
    userTmp : {
      image: '',
      nom: '',
      prenom: '',
      dateDeNaissance: '',
      niveauEtude:'',
      biographie:'',
      competence:''
    }
  }
  
  handleChange = (event) =>{
    const {value,name} = event.target
    const user = {...this.state.userTmp}
    user[name] = value
    this.setState({userTmp:user})
    this.handleControl(event)
  }

  handleClickInit = () => {
    this.setState({userTmp:[]})
    this.setState({error:[]})
  }

  containsError = () => {
    const {prenom,biographie} = this.state.error
    return prenom !== '' || biographie !== '' ? true : false
  }

  handleClickSubmit = (user) => {
    const {prenom,biographie} = this.state.error
    if(prenom === '' && biographie === ''){
      const users = {...this.state.users}
      users[Date.now()]=user
      this.setState({users:users})
    }
    else{
      console.log('erreuuuuuur')
    }
  }

  addError = (name,erreur) =>{
    const error = {...this.state.error}
    error[name] = erreur
    this.setState({error:error})
  }
  
  handleControl = (event) =>{
    const {name} = event.target
    
    //Prenom
    if(name === 'prenom' && this.state.userTmp[name].split(" ").length - 1 !== 1 && this.state.userTmp[name].split(" ").length - 1 !== 0)
    {
      this.addError('prenom','Le prenom doit contenir au max deux mots')
    }
    else if(name === 'prenom'){
      this.addError('prenom','')
    }
    //biographie
    if(name === 'biographie' && this.state.userTmp[name].length <= 100)
    {
      this.addError('biographie','le nombre de caractére doit être supérieur ou égal à 100')
    }
    else if(name === 'biographie'){
      this.addError('biographie','')
    }


  }
    

  render(){

    const {userTmp,users,error} = this.state

    return (
      <div className='container'>
        <h1 className='text-center'>CODELMI YA WLIDIIIII</h1>
        <div className='table'>
          <div className='row'>
            <div className='col-lg-4 border mt-2'> 
              <Formulaire
                userTmp={userTmp}
                handleChange = {this.handleChange}
                handleClickInit = {this.handleClickInit}
                handleClickSubmit = {this.handleClickSubmit}
                error = {error}
              />
            </div>  
            <div className='col-lg-8 border mt-2'>
              <Info
                users={users}
                userTmp={userTmp}
              />
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
