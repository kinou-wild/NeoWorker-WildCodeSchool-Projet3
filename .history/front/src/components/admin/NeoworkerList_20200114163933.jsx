import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import './ListeNeoworker&Mission.css'

const NeoworkerList = () => {

    //hooks to get all freelancers
    const [data, setData] = useState([])
    const [list, setList] = useState({ 0: [], 1: [], 2: [], 3: [] })
    
    //function to get list of Neoworkers
    const getNeoworker = () => {
        axios.get('http://localhost:5000/freelancers')
            .then(res => setData(res.data))
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        getNeoworker()

    }, [])
    useEffect(() => {
        hello()
    }, [data])

    const hello = () => {
        data.map((freelancer) => {
            if (freelancer.status !== null) {
                setList({ ...list, [freelancer.status]: [...list[freelancer.status], freelancer] })
            }
        })
    }
    return (
        <div className="neoworker-div">
            <h2 className="neoworker-h2">Neoworkers disponible :</h2>
            <div className="neoworker-card-div">
                {list[0].map(x => {
                    return <NeoworkerListCard key={x.id} list={{ ...x }} />
                })}
            </div>
            <h2 className="neoworker-h2">Neoworkers partiellement disponible :</h2>
            <div className="neoworker-card-div">
                {list[1].map(x => {
                    return <NeoworkerListCard key={x.id} list={{ ...x }} />
                })}
            </div>
            <h2 className="neoworker-h2">Neoworkers Non-disponible :</h2>
            <div className="neoworker-card-div">
                {list[2].map(x => {
                    return <NeoworkerListCard key={x.id} list={{ ...x }} />
                })}
            </div>
            <h2 className="neoworker-h2">Neoworkers ignorer :</h2>
            <div className="neoworker-card-div">
                {list[3].map(x => {
                    return <NeoworkerListCard key={x.id} list={{ ...x }} />
                })}
            </div>
        </div>
    )

}

export default NeoworkerList