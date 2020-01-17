import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import './ListeNeoworker&Mission.css' 

const NeoworkerList = () => {

    //hooks to get all freelancers
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


    return(
        <div className="neoworker-div">
            <h2 className="neoworker-h2">Neoworkers disponible :</h2>
            {list[0].status === 0 ?
            <div className="neoworker-card-div">
                {list.map( x => (
                    <NeoworkerListCard key={x.id} list={{...x}} />
                ))}
            </div>
            :list.status === 1 ?
                {list.map( x => (
                    <NeoworkerListCard key={x.id} list={{...x}} />
                ))}
            }
            
        </div>
    )

}

export default NeoworkerList