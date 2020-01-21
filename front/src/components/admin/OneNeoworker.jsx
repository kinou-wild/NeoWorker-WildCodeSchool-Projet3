import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SeeNeoworker from './SeeNeoworker'
import './CommonDesign.css'

const OneNeoworker = (props) => {
    //hook to get NeoWorkers by id
    const [neoworkerById, setNeoworkerById] = useState([])

    //function to get neoworker by id
    const getNeoworkerById = (id) => {
        axios.get(`http://localhost:5000/freelancer/${id}`)
            .then(res => setNeoworkerById(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getNeoworkerById(props.match.params.id)
    }, [])

    const handleClick = (e) => {
        setNeoworkerById({ ...neoworkerById, status: 3 })
    }


    console.log(neoworkerById)
    return (
        <>
            <SeeNeoworker neoworker={neoworkerById} onClick={handleClick} />
        </>
    )
}

export default OneNeoworker

