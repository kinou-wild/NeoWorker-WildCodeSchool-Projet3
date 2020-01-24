import React, { useState, useEffect } from 'react';
import './MatchingPage.css'
import axios from 'axios'
import '../admin/CommonDesign.css'


const MatchingPage = (props) => {

    const [dataFree, setDataFree] = useState([])
    const [dataMission, setDataMission] = useState([])

    const params = props.match.params

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
        await axios.get(`http://localhost:5000/mission/${params.id}`)
            .then(res => setDataMission(res.data))
            .catch(err => console.log(err))
    }




    const tabValues = []
    const tabKey = []
    const tabValueMission = []
    const tabKeyMission = []

    tabValueMission.push(Object.values(dataMission))
    tabKeyMission.push(Object.keys(dataMission))

    for (let i = 0; i <= dataFree.length - 1; i++) {
        tabValues.push(Object.values(dataFree[i]))
        tabKey.push(Object.keys(dataFree[i]))

    }

    const sumFreelancers = []
    const sumIdFree = []


    for (let w = 0; w <= dataFree.length - 1; w++) {


        if (tabValues[w][8] === tabValueMission[0][13] && tabValues[w][12] === tabValueMission[0][18]) {
            const tabContainer = [0]
            const idFreeContainer = []

            for (let v = tabKey[0].indexOf('excel'); v <= tabKey[0].indexOf('sens_effort'); v++) {
                //when mission ask 3 stars

                //excel : ok. Points : non ok.

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

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === 1) {
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

                for (let a = tabKey[0].indexOf('francais'); a <= tabKey[0].indexOf('allemand'); a++) {
                    //when mission ask 3 stars


                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])
<<<<<<< HEAD
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

                        if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === 1) {
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
                        
                        for (let a = tabKey[0].indexOf('francais'); a <= tabKey[0].indexOf('allemand'); a++) {
                            //when mission ask 3 stars

                            if (tabValues[w][a] === 3 & tabValueMission[0][a + 3] === 3 & tabValues[w][a] - tabValueMission[0][a + 3] === 0) {
                                tabContainer.push(100)
                                idFreeContainer.push(tabValues[w][0])
                                
                            }
                            else if (tabValues[w][a] === 2 & tabValueMission[0][a + 3] === 3 & tabValues[w][a] - tabValueMission[0][a + 3] === -1) {
                                tabContainer.push(50)
                                idFreeContainer.push(tabValues[w][0])

                            }
                            else if (tabValues[w][a] === 1 & tabValueMission[0][a + 3] === 3 & tabValues[w][a] - tabValueMission[0][a + 3] === -2) {
                                tabContainer.push(25)
                                idFreeContainer.push(tabValues[w][0])
                                
                            }
                            
                            //when mission ask 2 stars

                            if (tabValues[w][a] === 3 & tabValueMission[0][a + 3] === 2 & tabValues[w][a] - tabValueMission[0][a + 3] === 1) {
                                tabContainer.push(125)
                                idFreeContainer.push(tabValues[w][0])
                            }
                            else if (tabValues[w][a] === 2 & tabValueMission[0][a + 3] === 2 & tabValues[w][a] - tabValueMission[0][a + 3] === 0) {
                                tabContainer.push(100)
                                idFreeContainer.push(tabValues[w][0])
                            }
                            else if (tabValues[w][a] === 1 & tabValueMission[0][a + 3] === 2 & tabValues[w][a] - tabValueMission[0][a + 3] === -1) {
                                tabContainer.push(50)
                                idFreeContainer.push(tabValues[w][0])
                            }
                            
                            
                            //when mission ask 1 star
                            
                            if (tabValues[w][a] === 3 & tabValueMission[0][a + 3] === 1 & tabValues[w][a] - tabValueMission[0][a + 3] === 2) {
                                tabContainer.push(150)
                                idFreeContainer.push(tabValues[w][0])
                                
                                
                            }
                            else if (tabValues[w][a] === 2 & tabValueMission[0][a + 3] === 1 & tabValues[w][a] - tabValueMission[0][a + 3] === 1) {
                                tabContainer.push(125)
                                idFreeContainer.push(tabValues[w][0])
                            }
                            else if (tabValues[w][a] === 1 & tabValueMission[0][a + 3] === 1 & tabValues[w][a] - tabValueMission[0][a + 3] === 0) {
                                tabContainer.push(100)
                                idFreeContainer.push(tabValues[w][0])
                            }
                            
                            
                        }
=======
>>>>>>> e63c4c8a519019848deba3262e2372913f02709f

                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === -1) {
                        tabContainer.push(50)
                        idFreeContainer.push(tabValues[w][0])

                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === -2) {
                        tabContainer.push(25)
                        idFreeContainer.push(tabValues[w][0])

                    }

                    //when mission ask 2 stars

                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === 1) {
                        tabContainer.push(125)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === -1) {
                        tabContainer.push(50)
                        idFreeContainer.push(tabValues[w][0])
                    }


                    //when mission ask 1 star

                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 2) {
                        tabContainer.push(150)
                        idFreeContainer.push(tabValues[w][0])


                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 1) {
                        tabContainer.push(125)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])
                    }


                }

            }


            for (let prest = tabKey[0].indexOf('assistance_suivi_comptable'); prest <= tabKey[0].indexOf('after_sales_service'); prest++) {
                if (sumIdFree.includes(idFreeContainer)) {
                    //console.log("already exist")
                } else if (tabValues[w][prest] === true && tabValueMission[0][prest + 2] === true) {
                    // if (sumIdFree.includes(sumIdFree[])){}
                    sumFreelancers.push(tabContainer.reduce((acc, current) => acc + current))
                    sumIdFree.push(idFreeContainer)

                } else {
                    console.log('pas de matching sur les prestations')
                }

            }

        }

    }
    const fusionIdSum = []
    for (let k = 0; k <= sumFreelancers.length - 1; k++) {
        fusionIdSum.push([sumFreelancers[k], sumIdFree[k][0]])
    }



    fusionIdSum.sort((a, b) => a[0] - b[0]).reverse()


    const tabFinal = []
    for (let hj = 0; hj <= fusionIdSum.length; hj++) {
        const tro = fusionIdSum.map(x => x[1])
        const filterdataFree = dataFree.filter(x => x.id === tro[hj])
        tabFinal.push(filterdataFree)

    }
    const allFree = tabFinal.map(x => x)


    return (
        <div className="container-matching">
            {allFree.map((arrayInObject,y) =>
                typeof arrayInObject[0] === "undefined" ? console.log("array vide") :
                    <div key={arrayInObject[0].id}>
                        <li>{y+1}</li>
                        <li>{arrayInObject[0].id}</li>
                        <li>{arrayInObject[0].lastname}</li>
                        <li>{arrayInObject[0].firstname}</li>
                        <li>{arrayInObject[0].email}</li>
                    </div>
            )

            }


        </div>
    );
}

export default MatchingPage;