import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'

const NeoworkerList = () => {

    //hook to get all freelancers
    const [list, setList] = useState([])

    //function to get list of Neoworkers
    const getNeoworker = () => {
        axios.get('http://localhost:5000/freelancers')
        .then(res => setList(res.data))
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        getNeoworker()
    }, [])
    
    //hook to update a freelancer
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    //function to update a freelancer
    const update = (e, id) => {
        e.preventDefault()
        axios.put(`http//localhost:5000/freelancers/${id}`)
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }

    return(
        <div style= {{padding:'500px'}}>
            <div>
                {list.map( x => (
                    <NeoworkerListCard neoworkerList={list} />
                ))}
            </div>
        </div>
    )

}

export default NeoworkerList