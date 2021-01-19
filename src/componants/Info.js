import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Apercu from './Apercu'
import User from './User'

const Info = ({users,userTmp}) =>  {

   /* const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (err) {
            return require(`../img/ilias.jpeg`)
        }
      }*/

      const printUsers = Object.keys(users)
      .map(key => <User
        key={key}
        id={key}
        user={users[key]}
      />)

        return(
            <Fragment>
                <Apercu
                    userTmp={userTmp}
                />
                <h1 className='text-center'>Liste des utilisateurs</h1>
                <div className='Info'>
                    { printUsers }
                </div>
            </Fragment>    
        );
}

export default Info