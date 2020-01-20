import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'


const ChangeNeoworker = (props) => {

    const params = props.match.params

    // Get Neoworker data
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    const getData = async (id) => {
        await axios.get(`http://localhost:5000/freelancer/${params.id}`)
            .then(res => setUpdateNeoworker(res.data))
            .catch((err) => console.log(err))
    }

    //function to update a freelancer
    const updateDataNeoworker = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/freelancers/${params.id}`, updateNeoworker)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/neoworker/liste')
            }
            )
    }

    useEffect(() => {
        update()
    }, [])

    const onStarClick = (nextValue, name) => {
        if (updateNeoworker[name] === nextValue) {
            setUpdateNeoworker({ ...updateNeoworker, [name]: null })
        } else {
            setUpdateNeoworker({ ...updateNeoworker, [name]: nextValue })
        }
    }
    return (
        <div>
            <div className="admin-neoworker">
                <div className='profil-card'>
                    <p className='name-card'> Anais</p>
                    {/* <img className='pic-card' src={prof  ilPic} alt='profil picture' /> */}
                </div>
                <h1 className='admin-h1'> NeoWorker <span className='textModif'>:</span></h1>
                <div className='body'>
                    <Form className="formulaire-creation-neoworker"  >
                        <FormGroup>
                            <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                                value={updateNeoworker.note}
                            />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ChangeNeoworker;