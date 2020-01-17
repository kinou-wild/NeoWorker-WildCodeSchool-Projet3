 import React, {useState, useEffect} from 'react';
 import {useLocation} from 'react-router-dom'
 import axios from 'axios';
 import UpdateNeoworkerCard from './UpdateNeoworkerCard'

 
 const ChangeNeoworker = ({neoworker}) => {

    //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState({neoworker})

    console.log(neoworker)
    //function to update a freelancer
    const update = (e, id) => {
        // e.preventDefault()
        axios.put(`http://localhost:5000/freelancers/${id}`)
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }

    useEffect( () => {
        update()
    },[])

    const onStarClick = (nextValue, name) => {
        if (updateNeoworker[name] === nextValue) {
            setUpdateNeoworker({...updateNeoworker, [name]: null})
        } else {
            setUpdateNeoworker({...updateNeoworker, [name]: nextValue})
        }
    }
    return (
        <div>
            <UpdateNeoworkerCard dataNeoworker={updateNeoworker} onClick={onStarClick} update={update}/>
        </div>
    ) 
 }

 export default ChangeNeoworker;