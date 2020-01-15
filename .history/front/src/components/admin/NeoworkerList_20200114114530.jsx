import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import './ListeNeoworker&Mission.css'

const NeoworkerList = () => {

    //hooks to get all freelancers
    const data= []
    const list = [[], [], [], []]

    //function to get list of Neoworkers
    const getNeoworker = async () => {
        try {

            data = await axios.get('http://localhost:5000/freelancers') 
            data.map((freelancer) => {
                list[freelancer.status].push(freelancer)
            })
            console.log(data)
            console.log(list)

        }
        catch(err){console.log(err)}

               
    }

    useEffect(() => {
        getNeoworker()
    }, [])

    console.log(list)

    return (
        <div className="neoworker-div">
            <h2 className="neoworker-h2">Neoworkers disponible :</h2>

            <div className="neoworker-card-div">
                {list[0].map(x => (
                    <NeoworkerListCard key={x.id} list={{ ...x }} />
                ))}
            </div>


        </div>
    )

}

export default NeoworkerList