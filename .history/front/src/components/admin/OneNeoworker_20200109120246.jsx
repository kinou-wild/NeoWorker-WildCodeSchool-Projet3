import React, {useState, useEffect} from 'react'
import axios from 'axios'
import OneNeoworkerCard from './OneNeoworkerCard'

const OneNeoworker = ({}) => {
    //hook to get NeoWorkers by id
    const [neoworkerById, setNeoworkerById] = useState([])

    //function to get neoworker by id
    const getNeoworkerById = (id) => {
        axios.get(`https://http://localhost:5000/freelancer/${id}`)
        .then(res => setNeoworkerById(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getNeoworkerById(url.params.id)
    }, [])
    
    console.log(neoworkerById)

    return(
        <div>
               <OneNeoworkerCard neoworker={{...neoworkerById}}/>
        </div>
    )
}

export default OneNeoworker

