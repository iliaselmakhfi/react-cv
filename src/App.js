import React, { Component, Fragment } from 'react'
import Formulaire from './componants/Formulaire'
import Info from './componants/Info'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {

  state = {
    titre : 'ilias',
    logo: 'ilias.jpeg',
    diplome: 'Bac+5'
  }
  
  handleChangeTitre = event =>{
    const titre = event.target.value
    this.setState({titre})
  }

  handleChangeDiplome = event =>{
    const diplome = event.target.value
    this.setState({diplome})
  }
  
  render(){


    return (
      <div className='container'>  
        <div className='table'>
          <div className='row'>
            <div className='col-lg-4 border mt-2'> 
              <Formulaire
                titre={this.state.titre}
                diplome={this.state.diplome}
                handleChangeTitre = {this.handleChangeTitre}
                handleChangeDiplome = {this.handleChangeDiplome}
              />
            </div>  
            <div className='col-lg-8 border mt-2'>
              <Info
                logo={this.state.logo}
                titre={this.state.titre}
                diplome={this.state.diplome}
              />
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
