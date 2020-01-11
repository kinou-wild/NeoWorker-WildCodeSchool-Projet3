import React, { useState, useEffect } from "react";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import logo from '../../img/LOGO_CLASSIQUE_FOND TRANSPARENT_520X272.png'
import './LandingFreelancer.css'
import {Link} from 'react-router-dom'
import {
  login
} from '../UserFunctions'


const LandingUser = (props) => {

   const [loginHooks, setLoginHooks] = useState({
     email: '',
     password: '',
     errors: {}
   })
  

    // créé et modifié le champ Email et Password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  
    function handleSubmit(event) {
      event.preventDefault();
    }




     //onSubmit pour se login
     const onSubmit = (e) => {
       e.preventDefault()

       const user = {
         email: loginHooks.email,
         password: loginHooks.password
       }

       login(user).then(res => {
         if (res !== 'user doesnt exist') {
          props.history.push(`/neoworker/homepage`)
          window.location.reload()

         }

       })
     }

  return (
      <div className='landing'>
        <img className='logoLanding' src = {logo} alt='logo' />
          <div className='landingText'>
            <h1 className='landingH1'>Bienvenue dans l’espace <span className='textModif'>Freelance</span> NeoWorker<span className='textModif'>.</span></h1>
              <h2 className='landingH2'>Connectez-vous pour gérer votre profil et vos disponibilités.</h2>
          </div>
          <div className='connectingForm'>
            <Form onSubmit={onSubmit}>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input className='inputEmail' type="email" name="email" id="exampleEmail" placeholder="Email" 
                      value={loginHooks.email}
                      onChange={(e) => { setLoginHooks({ ...loginHooks, email: e.target.value }) }}/>
                  </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input className='inputPassword' type="password" name="password" id="examplePassword" placeholder="Mot de passe" 
                    value={loginHooks.password}
                        onChange={(e) => { setLoginHooks({ ...loginHooks, password: e.target.value }) }}
                    />
                  </Col>
              </FormGroup>
            <a href='/'>Mot de passe oublié ?</a>
            
          <div className="text-center">
              <button className='btnConnection' type="submit">Se connecter</button>
          </div>
            </Form>
          </div>
      </div>
  );
}

export default LandingUser