import React, { useContext, useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Slide3 = (props) => {
    //hooks de la data freelancer pour get un id
    const [idFree, setIdFree] = useState([])

    //hooks de la data user pour le get de l'id
    const [idUser, setIdUser] = useState([])

    const data = props.data

    return (

        <div>
            <h2 className='competences-title'>Centre d'interet</h2>
            <div className='competences'>
                {data.map(x =>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Sport</p>
                            <input type="textaera" name="text" id="autres_skills" value={x.autres_softskill} />
                        </div>
                        <div className='mission-card'>
                            <p>Passion</p>
                            <input type="textaera" name="text" id="autres_skills" value={x.autres_softskill} />
                        </div>
                        <div className='mission-card'>
                            <p>Engagement Associatif</p>
                            <input type="textaera" name="text" id="autres_skills" value={x.autres_softskill} />
                        </div>
                        <div className='champ-libre'>
                            <p>Autres skills</p>
                            <input type="textaera" name="text" id="autres_skills" value={x.autres_softskill} />
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default Slide3