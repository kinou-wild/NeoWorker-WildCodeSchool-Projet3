import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import logo from '../../img/LOGO_CLASSIQUE_FOND TRANSPARENT_520X272.png'
import './LandingUser.css'

export default function LandingUser(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

  return (
      <div className='landing'>
        <img className='logoLanding' src = {logo} alt='logo' />
        <div className='landingText'>
        <h1 className='landingH1'>Bienvenue dans l’espace <span className='textModif'>Freelance</span> NeoWorker<span className='textModif'>.</span></h1>
        <h2 className='landingH2'>Connectez-vous pour gérer votre profil et vos disponibilitées.</h2>
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
      <a href='/'>Mot de passe oublié ?</a>
      </div>
      <div className="text-center">
        <button className='btnConnection' disabled={!validateForm()} type="submit">
          Se connecter
        </button>
        </div>
      </div>
  );
}
