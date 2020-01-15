import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import './ListeNeoworker&Mission.css' 

const NeoworkerList = () => {

    //hooks to get all freelancers
    const [data, setData] = useState([])
    const list = []
   
    //function to get list of Neoworkers
    const getNeoworker = () => {
        axios.get('http://localhost:5000/freelancers')
            .then(res => setData(res.data) & console.log(data))
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        getNeoworker()
       
    }, [])

    console.log(list)

    return(
        <div className="neoworker-div">
            <button style={{padding:'500px'}} onClick={console.log(data)}></button>
            <h2 className="neoworker-h2">Neoworkers disponible :</h2>

            <div className="neoworker-card-div">
                {list.map( x => (
                    <NeoworkerListCard key={x.id} list={{...x}} />
                ))}
            </div>
            
            
        </div>
    )

}

export default NeoworkerList