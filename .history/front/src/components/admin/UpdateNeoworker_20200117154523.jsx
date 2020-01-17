import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateNeoworkerCard from './UpdateNeoworkerCard'


const ChangeNeoworker = () => {

    // Get Neoworker data
    const [data, setData] = useState([])

    const fetchData = async (id) => {
        await axios.get(`http://localhost:5000/freelancer/${id}`)
            .then(res => setData(res.data))
            .catch((err) => console.log(err))
    }

    //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    //function to update a freelancer
    const update = async (e, id) => {
        // e.preventDefault()
        await axios.put(`http://localhost:5000/freelancers/${id}`)
            .then(res => setUpdateNeoworker(res.data))
            .catch((err) => console.log(err))
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
            <UpdateNeoworkerCard data={data} onClick={onStarClick} update={update} />
        </div>
    )
}

export default ChangeNeoworker;