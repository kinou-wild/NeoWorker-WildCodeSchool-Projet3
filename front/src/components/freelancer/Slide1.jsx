import React, { useContext, useEffect, useState } from 'react'

const Slide1 = () => {
    //hooks de la data freelancer pour get un id
    const [idFree, setIdFree] = useState([])

    //hooks de la data user pour le get de l'id
    const [idUser, setIdUser] = useState([])

return(
<div>
<h2 className='competences-title'>Outils</h2>
<div className='competences'>
    <div className='competences-card'>
        <p>excel</p>
        <p>{String(idFree.excel)}</p>
    </div>
    <div className='competences-card'>
        <p>powerpoint</p>
        <p>{String(idFree.powerpoint)}</p>
    </div>
    <div className='competences-card'>
        <p>word</p>
        <p>{String(idFree.word)}</p>
    </div>
    <div className='competences-card'>
        <p>microsoft_365</p>
        <p>{String(idFree.microsoft_365)}</p>
    </div>
    <div className='competences-card'>
        <p>crm_hubspot</p>
        <p>{String(idFree.crm_hubspot)}</p>
    </div>
    <div className='competences-card'>
        <p>crm_salesforce</p>
        <p>{String(idFree.salesforce)}</p>
    </div>
    <div className='competences-card'>
        <p>crm_pipedrive</p>
        <p>{String(idFree.crm_pipedrive)}</p>
    </div>
    <div className='competences-card'>
        <p>crm</p>
        <p>{String(idFree.crm)}</p>
    </div>
    <div className='competences-card'>
        <p>suite_adobe</p>
        <p>{String(idFree.suite_adobe)}</p>
    </div>
    <div className='competences-card'>
        <p>illustrator</p>
        <p>{String(idFree.illustrator)}</p>
    </div>
    <div className='competences-card'>
        <p>in_design</p>
        <p>{String(idFree.in_design)}</p>
    </div>
    <div className='competences-card'>
        <p>photoshop</p>
        <p>{String(idFree.photoshop)}</p>
    </div>
    <div className='competences-card'>
        <p>marketing_fb</p>
        <p>{String(idFree.marketing_fb)}</p>
    </div>
    <div className='competences-card'>
        <p>google_adwards</p>
        <p>{String(idFree.google_adwards)}</p>
    </div>
    <div className='competences-card'>
        <p>insta</p>
        <p>{String(idFree.insta)}</p>
    </div>
    <div className='competences-card'>
        <p>reseaux_sociaux</p>
        <p>{String(idFree.reseaux_sociaux)}</p>
    </div>
    <div className='competences-card'>
        <p>keynote</p>
        <p>{String(idFree.keynote)}</p>
    </div>
    <div className='competences-card'>
        <p>pages</p>
        <p>{String(idFree.pages)}</p>
    </div>
    <div className='competences-card'>
        <p>gsuite_google</p>
        <p>{String(idFree.gsuite_google)}</p>
    </div>
    <div className='competences-card'>
        <p>numbers</p>
        <p>{String(idFree.numbers)}</p>
    </div>
    <div className='competences-card'>
        <p>erp_sap</p>
        <p>{String(idFree.erp_sap)}</p>
    </div>
    <div className='competences-card'>
        <p>ciel_gestion</p>
        <p>{String(idFree.ciel_gestion)}</p>
    </div>
    <div className='competences-card'>
        <p>cegid</p>
        <p>{String(idFree.cegid)}</p>
    </div>
    <div className='competences-card'>
        <p>sage_gestion_commercial</p>
        <p>{String(idFree.sage_gestion_commercial)}</p>
    </div>
    <div className='competences-card'>
        <p>sage_comptabipte</p>
        <p>{String(idFree.sage_comptabipte)}</p>
    </div>
    <div className='competences-card'>
        <p>quadra</p>
        <p>{String(idFree.quadra)}</p>
    </div>
</div>
</div>
)
}
export default Slide1;