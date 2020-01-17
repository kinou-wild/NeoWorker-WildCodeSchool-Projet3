import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import './ListeNeoworker&Mission.css' 

const NeoworkerList = () => {

    //hooks to get all freelancers
    const [data, setData] = useState([])
    const [list, setList] = useState({0:[],1:[],2:[],3:[]})
    const [myList, setMyList] = useState([])
   const [bool,setBool] = useState(true)
    //function to get list of Neoworkers
    const getNeoworker = () => {
        axios.get('http://localhost:5000/freelancers')
            .then(res => setData(res.data))
            .then(x => hello())
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        getNeoworker()
       
    }, [])
useEffect( () => {
   
},[data])
const hello = () => {
    data.map((freelancer) => {
        if(freelancer.status !== null){
          () => setList({...list, [freelancer.status]:[...list[freelancer.status], freelancer]})

        }

    })

}
hello()
    return(
        <div className="neoworker-div">
            <button style={{margin:'500px'}}>mybutton</button>
            <h2 className="neoworker-h2">Neoworkers disponible :</h2>

            <div className="neoworker-card-div">
                {list[0].map( x => {
                    console.log('hello world')
                   return <NeoworkerListCard key={x.id} list={{...x}} />
})}
            </div>
            
            
        </div>
    )

}

export default NeoworkerList