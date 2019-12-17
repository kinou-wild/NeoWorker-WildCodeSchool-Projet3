import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../SidebarContext'

const Slide3 = () => {
        //hooks de la data freelancer pour get un id
        const [idFree, setIdFree] = useState([])

        //hooks de la data user pour le get de l'id
        const [idUser, setIdUser] = useState([])

    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    useEffect(() => {
        setShowSidebar(true)
        setRoleSidebar("neoworker")
    })

return(
<div>

<h2 className='competences-title'>Centre d'interet</h2>
<div className='competences'>
    <div className='competences-card'>
        <p>sport</p>
        <p>{String(idFree.sport)}</p>
    </div>
    <div className='competences-card'>
        <p>passion</p>
        <p>{String(idFree.passion)}</p>
    </div>
    <div className='competences-card'>
        <p>engagement_asso</p>
        <p>{String(idFree.engagement_asso)}</p>
    </div>
    <div className='competences-card'>
        <p>autres_softskill</p>
        <p>{String(idFree.autres_softskill)}</p>
    </div>
</div>

<h2 className='competences-title'>Langues</h2>
<div className='competences'>                    
    <div className='competences-card'>
        <p>francais</p>
        <p>{String(idFree.francais)}</p>
    </div>
    <div className='competences-card'>
        <p>anglais</p>
        <p>{String(idFree.anglais)}</p>
    </div>
    <div className='competences-card'>
        <p>itapen</p>
        <p>{String(idFree.itapen)}</p>
    </div>
    <div className='competences-card'>
        <p>chinois</p>
        <p>{String(idFree.chinois)}</p>
    </div>
    <div className='competences-card'>
        <p>russe</p>
        <p>{String(idFree.russe)}</p>
    </div>
    <div className='competences-card'>
        <p>arabe</p>
        <p>{String(idFree.arabe)}</p>
    </div>
    <div className='competences-card'>
        <p>allemand</p>
        <p>{String(idFree.allemand)}</p>
    </div>
    <div className='competences-card'>
        <p>autres_langue</p>
        <p>{String(idFree.autres_langue)}</p>
    </div>
    </div>
</div>

)
}

export default Slide3