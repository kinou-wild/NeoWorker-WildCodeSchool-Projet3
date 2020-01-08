import React, { useState, useContext, useEffect } from "react";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import logo from '../../img/LOGO_CLASSIQUE_FOND TRANSPARENT_520X272.png'
import './LandingAdmin.css'
import {Link} from 'react-router-dom'
import {
  login
} from '../UserFunctions'


const LandingAdmin = (props) => {

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
        console.log(res)
        if (res!=='user doesnt exist') {
          props.history.push(`/admin/homepage`)
          window.location.reload()

        }

      })
    }
  return (
      <div className='landing'>
        <form noValidate onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter your first name"
                        value={loginHooks.email}
                        onChange={(e) => { setLoginHooks({ ...loginHooks, email: e.target.value }) }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Enter your first name"
                        value={loginHooks.password}
                        onChange={(e) => { setLoginHooks({ ...loginHooks, password: e.target.value }) }}
                    />
                </div>
                <button type="submit">Sign in</button>
            </form>














































        
        <img className='logoLanding' src = {logo} alt='logo' />
          <div className='landingText'>
            <h1 className='landingH1'>Bienvenue dans l’espace <span className='textModif'>Admin</span> NeoWorker<span className='textModif'>.</span></h1>
              <h2 className='landingH2'>Connectez-vous pour gérer les NeoWorkers et leurs activité.</h2>
          </div>
          <div className='connectingForm'>
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input className='inputEmail' type="email" name="email" id="exampleEmail" placeholder="Email" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input className='inputPassword' type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
                  </Col>
              </FormGroup>
            </Form>
            <a href='/'>Mot de passe oublié</a>
          </div>
          <div className="text-center">
            <Link to='/admin/homepage'>
              <button className='btnConnection' type="submit">Se connecter</button>
            </Link>
          </div>
      </div>
  );
}
export default LandingAdmin