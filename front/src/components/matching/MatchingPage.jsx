import React, { useState, useEffect } from 'react';
import './MatchingPage.css'
import axios from 'axios'


const MatchingPage = () => {

    const [dataFree, setDataFree] = useState([])
    const [dataMission, setDataMission] = useState([])


    useEffect(() => {
        fetchDataFree()
        fetchDataMiss()
    }, [])

    //toujours un async pour un GET
    const fetchDataFree = async () => {
        await axios.get('http://localhost:5000/freelancers/')
            .then(res => setDataFree(res.data))
            .catch(err => console.log(err))
    }

    const fetchDataMiss = async () => {
        await axios.get('http://localhost:5000/mission/1')
            .then(res => setDataMission(res.data))
            .catch(err => console.log(err))
    }



    const test = () => {
        const tabValues = []
        const tabValueMission = []

        tabValueMission.push(Object.values(dataMission))

        for (let i = 0; i <= dataFree.length - 1; i++) {
            tabValues.push(Object.values(dataFree[i]))
        }

        const sumFreelancers = []
        const sumIdFree = []

        for (let w = 0; w <= dataFree.length - 1; w++) {

            const tabContainer = [0]
            const idFreeContainer = []
            for (let v = 17; v <= 58; v++) {

                //when mission ask 3 stars

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])

                }
                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === -1) {
                    tabContainer.push(50)
                    idFreeContainer.push(tabValues[w][0])

                }
                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === -2) {
                    tabContainer.push(25)
                    idFreeContainer.push(tabValues[w][0])

                }

                //when mission ask 2 stars

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === -1) {
                    tabContainer.push(125)
                    idFreeContainer.push(tabValues[w][0])
                }
                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])
                }
                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === -1) {
                    tabContainer.push(50)
                    idFreeContainer.push(tabValues[w][0])
                }


                //when mission ask 1 star

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 2) {
                    tabContainer.push(150)
                    idFreeContainer.push(tabValues[w][0])


                }
                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 1) {
                    tabContainer.push(125)
                    idFreeContainer.push(tabValues[w][0])
                }
                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])
                }

            }
            sumFreelancers.push(tabContainer.reduce((acc, current) => acc + current))
            sumIdFree.push(idFreeContainer)
        }

        const fusionIdSum = []
        for (let k = 0; k <= sumFreelancers.length - 1; k++) {
            fusionIdSum.push([sumFreelancers[k], sumIdFree[k][0]])
        }
        
        fusionIdSum.sort((a,b)=>a[0]-b[0]).reverse()
        console.log(fusionIdSum)
        

    }





    return (
        <div className="container-matching">
            <button onClick={test}>algo</button>
        </div>
    );
}

export default MatchingPage;