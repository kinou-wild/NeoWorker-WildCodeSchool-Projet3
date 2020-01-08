import React, { useContext, useEffect, useState } from 'react'

const Slide2 = () => {
        //hooks de la data freelancer pour get un id
        const [idFree, setIdFree] = useState([])

        //hooks de la data user pour le get de l'id
        const [idUser, setIdUser] = useState([])



return(
<div>
<h2 className='competences-title'>Soft Skills</h2>
<div className='competences'>
    <div className='competences-card'>
        <p>reso_pb</p>
        <p>{String(idFree.reso_pb)}</p>
    </div>
    <div className='competences-card'>                            
        <p>confiance</p>
        <p>{String(idFree.confiance)}</p>
    </div>
    <div className='competences-card'>
        <p>empathie</p>
        <p>{String(idFree.empathie)}</p>
    </div>
    <div className='competences-card'>
        <p>intelpgence_emo</p>
        <p>{String(idFree.intelpgence_emo)}</p>
    </div>
    <div className='competences-card'>
        <p>communication</p>
        <p>{String(idFree.communication)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_temps</p>
        <p>{String(idFree.gestion_temps)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_stress</p>
        <p>{String(idFree.gestion_stress)}</p>
    </div>
    <div className='competences-card'>
        <p>creativite</p>
        <p>{String(idFree.creativite)}</p>
    </div>
    <div className='competences-card'>
        <p>esprit_entre</p>
        <p>{String(idFree.esprit_entre)}</p>
    </div>
    <div className='competences-card'>
        <p>audace</p>
        <p>{String(idFree.audace)}</p>
    </div>
    <div className='competences-card'>
        <p>vision_visu</p>
        <p>{String(idFree.vision_visu)}</p>
    </div>
    <div className='competences-card'>
        <p>motivation</p>
        <p>{String(idFree.motivation)}</p>
    </div>
    <div className='competences-card'>
        <p>presence</p>
        <p>{String(idFree.presence)}</p>
    </div>
    <div className='competences-card'>
        <p>sens_collectif</p>
        <p>{String(idFree.sens_collectif)}</p>
    </div>
    <div className='competences-card'>
        <p>curiosite</p>
        <p>{String(idFree.curiosite)}</p>
    </div>
    <div className='competences-card'>
        <p>sens_effort</p>
        <p>{String(idFree.sens_effort)}</p>
    </div>
</div>
</div>
)}

export default Slide2