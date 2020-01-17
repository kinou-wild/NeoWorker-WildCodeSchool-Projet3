 import React, {useState, useEffect} from 'react';
 import { useHistory } from 'react-router-dom'
 import axios from 'axios';
 import UpdateOneNeoworkerCard from './UpdateOneNeoworkerCard'


 const ChangeNeoworker = ({neoworker}) => {
     //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState({neoworker})

    //function to update a freelancer
    const update = (e, id) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/freelancers/${id}`)
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }

    useEffect = () => {
        update()
    }

    return (
        <div>
            <UpdateOneNeoworkerCard dataNeoworker={updateNeoworker}/>
        </div>
    ) 
 }

 export default ChangeNeoworker;