import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, FormGroup, InputGroupText, Input, Button, Label } from 'reactstrap';
import {Link} from 'react-router-dom'


const OneNeoworkerCard = ({neoworker}) => {
    console.log(neoworker)

     //hooks to update a neoworker
     const [updateNeoworker, setUpdateNeoworker] = useState({neoworker})

     //function to update a freelancer
     const update = (e, id) => {
         e.preventDefault()
         axios.put(`http://localhost:5000/freelancers/${id}`)
         .then(res => setUpdateNeoworker(res.data))
         .catch((err) => console.log(err))
     }

     useEffect(() => {
         update()
     }, [])
  

    return(
        <div>
            <div className="admin-neoworker">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                {/* <img className='pic-card' src={profilPic} alt='profil picture' /> */}
            </div>
                <h1 className='admin-h1'> NeoWorker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form className="formulaire-creation-neoworker" onSubmit={(e) => updateNeoworker(e)} >
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                            value={neoworker.note}
                            onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, note: e.target.value }) }} />
                    </FormGroup>
                    <div className='champs-mission'>
                        <FormGroup>
                            <Input style={{ textAlign: 'center' }}
                                type="text" id="title" name="Métier"
                                placeholder="Métier"
                                value={neoworker.title}
                                required
                                onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, title: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-firstname"
                                placeholder="Prénom" type="text"
                                id="firstname"
                                name="firstname"
                                value={neoworker.firstname}
                                required
                                onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, firstname: e.target.value }) }} />
                        </FormGroup>
                    </div>
                    <Button className='btn' type='submit'>modifier</Button>
                </Form>
            </div>
            </div>
            
            <Link to='/admin/neoworker/liste'>
                <button>back to list</button>
            </Link>
        </div>
    )
}
export default OneNeoworkerCard