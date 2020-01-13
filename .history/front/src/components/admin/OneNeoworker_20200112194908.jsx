import React, {useState, useEffect} from 'react'
import axios from 'axios'
import OneNeoworkerCard from './OneNeoworkerCard'

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
        console.log(neoworkerById)
    }, [])
    
    //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState(${neoworkerById})

    // function to update a freelancer
    // const update = (e, id) => {
    //     e.preventDefault()
    //     axios.put(`http://localhost:5000/freelancers/${id}`)
    //     .then(res => setUpdateNeoworker(res.data))
    //     .catch((err) => console.log(err))
    // }

    return(
        <div style={{padding:'500px'}}>
               <OneNeoworkerCard neoworker={neoworkerById}/>
        </div>
    )
}

export default OneNeoworker

