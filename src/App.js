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
    },
    niveauEtude : ['CHOISISEZ','BAC+1','BAC+2','BAC+3','BAC+4','BAC+5'] 
  }
  
  handleChange = (event) =>{
    const {value,name} = event.target
    let user = {...this.state.userTmp}
    user[name] = value
    this.setState({userTmp:user})
    this.handleControl(event)
  }

  handleClickInit = () => {
    this.setState({userTmp:[],error:[]})
  }

  containsError = () => {
    const {prenom,biographie} = this.state.error
    return prenom || biographie ? true : false
  }

  handleClickSubmit = (user) => {
    const {prenom,biographie} = this.state.error
    if(!prenom && !biographie){
      const newUser = {[Date.now()] : user}
      const users = {...this.state.users,...newUser}
      console.log(users)
      this.setState({users:users})
    }
    else{
      console.log('erreuuuuuur')
    }
  }

  addError = (name,erreur) =>{
    const err = { [name] : erreur}
    const error = {...this.state.error,...err}
    this.setState({error:error})
  }
  
  handleControl = (event) =>{
    const {name} = event.target
    const {userTmp} = this.state
    
    //Prenom
    if(userTmp[name]){
      if(name === 'prenom' && userTmp[name].split(" ").length - 1 !== 1 && userTmp[name].split(" ").length - 1 !== 0)
      {
        this.addError('prenom','Le prenom doit contenir au max deux mots')
      }
      else if(name === 'prenom'){
        this.addError('prenom','')
      }
      //biographie
      if(name === 'biographie' && userTmp[name].length <= 100)
      {
        this.addError('biographie','le nombre de caractére doit être supérieur ou égal à 100')
      }
      else if(name === 'biographie'){
        this.addError('biographie','')
      }
    }

  }
    

  render(){

    const {userTmp,users,error,niveauEtude} = this.state

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
                niveauEtude = {niveauEtude}
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
