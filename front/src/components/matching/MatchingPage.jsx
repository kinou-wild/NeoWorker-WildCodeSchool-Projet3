import React, {useReducer, useState, useEffect} from 'react';
import './MatchingPage.css'
import axios from 'axios'


const MatchingPage =  () => {

    const [dataFree, setDataFree] = useState([])
    const [dataMission, setDataMission] = useState ([])

    useEffect(() => {
        fetchDataFree()
        fetchDataMiss()
    }, [])

    //toujours un async pour un GET
    const fetchDataFree = async () => {
        await axios.get('http://localhost:5000/freelancers/')
        .then (res => setDataFree(res.data))
        .catch (err => console.log(err))
    }

    const fetchDataMiss = async () => {
        await axios.get('http://localhost:5000/mission/1')
        .then (res => setDataMission(res.data))
        .catch (err => console.log(err))
    }
    

const algo = () => {
  /*   dataFree.map((x, y) => {
        if (x.excel===dataMission.excel) {
            console.log('macouille')
        }
    
    }) */

    dataFree.map((x, y) => {
        console.log(x[y])

    })

}

    return ( 
        <div className="container-matching">
            <button onClick={algo}>algo</button>
        </div>
     );
}
 
export default MatchingPage;