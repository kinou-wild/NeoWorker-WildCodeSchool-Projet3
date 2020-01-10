import React, { useContext, useEffect, useState } from 'react'


const Slide3 = (props) => {
   
    const data = props.data

    return (

        <div>
            <h2 className='competences-title'>Centre d'interet</h2>
            <div className='competences'>
                {data.map(x =>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Sport</p>
                            <input type="textarea" name="text" id="sport" value={x.sport} />
                        </div>
                        <div className='mission-card'>
                            <p>Passion</p>
                            <input type="textaera" name="text" id="passion" value={x.passion} />
                        </div>
                        <div className='mission-card'>
                            <p>Engagement Associatif</p>
                            <input type="textaera" name="text" id="engagement_asso" value={x.engagement_asso} />
                        </div>
                        <div className='mission-card'>
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