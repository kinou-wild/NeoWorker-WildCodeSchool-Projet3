import React, {useState} from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoworkerListCard'

const NeoworkerList = () => {

    //hook to get all freelancers
    const [list, setList] = useState([])

    //function to get list of Neoworkers
    const getNeoworker = () => {
        axios.get('http//localhost:5000/freelancers')
        .then(res => setList(res.data))
        .catch((err) => console.log(err))
    }

    // hook to get NeoWorkers by id
    const [neoworkerById, setNeoworkerById] = useState([])

    //function to get neoworker by id
    const getNeoworkerById = () => {
        axios.get('http//localhost:5000/freelancers/:id')
        .then(res => setNeoworkerbyId(res.data))
        .catch((err) => console.log(err))
    }

    //hook to update a freelancer
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    //function to update a freelancer
    const update = () => {
        e.preventDefault()
        axios.put('http//localhost:5000/freelancers/:id')
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <div>
                {list.map( x => (
                    <NeoworkerListCard firstname= {x.firstname} lastname={x.lastname} title={x.title} />
                ))}
            </div>
        </div>
    )

}

export default NeoworkerList