import React, { useContext, useEffect, useState } from 'react'


const Slide4 = () => {
        //hooks de la data freelancer pour get un id
        const [idFree, setIdFree] = useState([])

        //hooks de la data user pour le get de l'id
        const [idUser, setIdUser] = useState([])


return(
<div>
    <h2 className='competences-title'>Famile de prestations</h2>
<div className='competences'>
    <div className='competences-card'>
        <p>gestion_admin_compta</p>
        <p>{String(idFree.gestion_admin_compta)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_op</p>
        <p>{String(idFree.gestion_op)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_commerciale</p>
        <p>{String(idFree.gestion_commerciale)}</p>
    </div>
    <div className='competences-card'>
        <p>marketing_com_digit</p>
        <p>{String(idFree.marketing_com_digit)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_fi_controle_gestion</p>
        <p>{String(idFree.gestion_fi_controle_gestion)}</p>
    </div>
    <div className='competences-card'>
        <p>dsi</p>
        <p>{String(idFree.dsi)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_rh_juridique</p>
        <p>{String(idFree.gestion_rh_juridique)}</p>
    </div>
    <div className='competences-card'>
        <p>gestion_rel_client</p>
        <p>{String(idFree.gestion_rel_cpent)}</p>
    </div>
</div>
</div>
)
}
export default Slide4;