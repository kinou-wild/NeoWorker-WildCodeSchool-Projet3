import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Mission = () => {

// hooks to get all missions
    const [missions, setMissions] = useState([])

//hooks to create a mission
    const [createm, setCreatem] = useState({
        title: "",
        statut: 1,
        address: "",
        mobilite: 1,
        disponibilite: 3,
        pref_lieu_de_travail: 2,
        fourchette_tarifaire: 2,
        excel: 2,
        word: 2,
        powerpoint: 2,
        microsoft_365: 2,
        crm_hubspot: 2,
        crm_salesforce: 2,
        crm_pipedrive: 2,
        crm: 2,
        suite_adobe: 2,
        illustrator: 2,
        in_design: 2,
        photoshop: 2,
        marketing_fb: 2,
        google_adwards: 2,
        insta: 2,
        reseaux_sociaux: 2,
        keynote: 2,
        pages: 2,
        gsuite_google: 2,
        numbers: 2,
        erp_sap: 2,
        ciel_gestion: 2,
        cegid: 2,
        sage_gestion_commercial: 2,
        sage_comptabilite: 2,
        quadra: 2,
        reso_pb: 2,
        confiance: 2,
        empathie: 2,
        intelligence_emo: 2,
        communication: 2,
        gestion_temps: 2,
        gestion_stress: 2,
        creativite: 2,
        esprit_entre: 2,
        audace: 2,
        vision_visu: 2,
        motivation: 2,
        presence: 2,
        sens_collectif: 2,
        curiosite: 2,
        sens_effort: 2,
        sport: "",
        passion: "",
        engagement_asso: "",
        autres_softskill: "",
        gestion_admin_compta: "",
        gestion_commerciale: "",
        gestion_op: "",
        marketing_com_digit: "",
        gestion_fi_controle_gestion: "",
        dsi: "",
        gestion_rh_juridique: "",
        gestion_rel_client: [{ "name": "Georges"}],
        francais: 3,
        anglais: 3,
        italien: 3,
        chinois: 3,
        russe: 3,
        arabe: 3,
        allemand: 3,
        autres_langue: ""
    })
    console.log(missions)

    // hooks to update a mission
    const [updateMissions, setUpdateMissions] = useState({
        title: "",
        statut: 1,
        address: "",
        mobilite: 1,
        disponibilite: 3,
        pref_lieu_de_travail: 2,
        fourchette_tarifaire: 2,
        excel: 2,
        word: 2,
        powerpoint: 2,
        microsoft_365: 2,
        crm_hubspot: 2,
        crm_salesforce: 2,
        crm_pipedrive: 2,
        crm: 2,
        suite_adobe: 2,
        illustrator: 2,
        in_design: 2,
        photoshop: 2,
        marketing_fb: 2,
        google_adwards: 2,
        insta: 2,
        reseaux_sociaux: 2,
        keynote: 2,
        pages: 2,
        gsuite_google: 2,
        numbers: 2,
        erp_sap: 2,
        ciel_gestion: 2,
        cegid: 2,
        sage_gestion_commercial: 2,
        sage_comptabilite: 2,
        quadra: 2,
        reso_pb: 2,
        confiance: 2,
        empathie: 2,
        intelligence_emo: 2,
        communication: 2,
        gestion_temps: 2,
        gestion_stress: 2,
        creativite: 2,
        esprit_entre: 2,
        audace: 2,
        vision_visu: 2,
        motivation: 2,
        presence: 2,
        sens_collectif: 2,
        curiosite: 2,
        sens_effort: 2,
        sport: "",
        passion: "",
        engagement_asso: "",
        autres_softskill: "",
        gestion_admin_compta: "",
        gestion_commerciale: "",
        gestion_op: "",
        marketing_com_digit: "",
        gestion_fi_controle_gestion: "",
        dsi: "",
        gestion_rh_juridique: "",
        gestion_rel_client: [{ "name": "Georges"}],
        francais: 3,
        anglais: 3,
        italien: 3,
        chinois: 3,
        russe: 3,
        arabe: 3,
        allemand: 3,
        autres_langue: ""
    })

    useEffect(() => {
        getMissions()
    }, [])

    // get all misions
    const getMissions = () => {
        axios.get('http://localhost:5000/missions')
        .then(response => setMissions(response.data))
        .catch((err) => console.log(err))
    }

    // create a mission
    const createMissions = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/missions', createm)
            .then(getMissions)
            .catch((err) => console.log(err))
    }

    const updateMissions = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/missions/1', updateMission)
        .then(getMissions)
        .catch(err => console.log(err))
    }

    const deleteMission = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:5000/missions/1')
        .then(getMission)
        .catch(err => console.log(err))
    }
    return (
        <div>
            {missions.map(x =>
                <div>   
                    <p>{x.title}</p>
                    <p>{x.statut}</p>
                    <p>{x.address}</p>
                    <p>{x.mobilite}</p>
                    <p>{x.disponibilite}=</p>
                    <p>{x.pref_lieu_de_travail}</p>
                    <p>{x.fourchette_tarifaire}</p>
                    <p>{x.excel}</p>
                    <p>{x.word}</p>
                    <p>{x.powerpoint}</p>
                    <p>{x.microsoft}</p>
                    <p>{x.crm_hubspot}</p>
                    <p>{x.crm_salesforce}</p>
                    <p>{x.crm_pipedrive}</p>
                    <p>{x.crm}</p>
                    <p>{x.suite_adobe}</p>
                    <p>{x.illustrator}</p>
                    <p>{x.in_design}</p>
                    <p>{x.photoshop}</p>
                    <p>{x.marketing_fb}</p>
                    <p>{x.google_adwards}</p>
                    <p>{x.insta}</p>
                    <p>{x.reseaux_sociaux}</p>
                    <p>{x.keynote}</p>
                    <p>{x.pages}</p>
                    <p>{x.gsuite_google}</p>
                    <p>{x.numbers}</p>
                    <p>{x.erp_sap}</p>
                    <p>{x.ciel_gestion}</p>
                    <p>{x.cegid}</p>
                    <p>{x.sage_gestion_commercial}</p>
                    <p>{x.sage_comptabilite}</p>
                    <p>{x.quadra}</p>
                    <p>{x.reso_pb}</p>
                    <p>{x.empathie}</p>
                    <p>{x.intelligence_emo}</p>
                    <p>{x.communication}</p>
                    <p>{x.gestion_temps}</p>
                    <p>{x.gestion_stress}</p>
                    <p>{x.creativite}</p>
                    <p>{x.esprit_entre}</p>
                    <p>{x.audace}</p>
                    <p>{x.vision_visu}</p>
                    <p>{x.motivation}</p>
                    <p>{x.presence}</p>
                    <p>{x.sens_collectif}</p>
                    <p>{x.curiosite}</p>
                    <p>{x.sens_effort}</p>
                    <p>{x.sport}</p>
                    <p>{x.passion}</p>
                    <p>{x.engagement_asso}</p>
                    <p>{x.autres_softskill}</p>
                    <p>{x.gestion_admin_compta}</p>
                    <p>{x.gestion_commerciale}</p>
                    <p>{x.gestion_op}</p>
                    <p>{x.marketing_com_digit}</p>
                    <p>{x.gestion_fi_controle_gestion}</p>
                    <p>{x.dsi}</p>
                    <p>{x.gestion_rh_juridique}</p>
                    <p>{x.gestion_rel_client}</p>
                    <p>{x.francais}</p>
                    <p>{x.anglais}</p>
                    <p>{x.italien}</p>
                    <p>{x.chinois}</p>
                    <p>{x.russe}</p>
                    <p>{x.arabe}</p>
                    <p>{x.allemand}</p>
                    <p>{x.autres_langue}</p>
                </div>
            )}
            <form onSubmit={createMissions}>
                <input
                    id="title"
                    name="title"
                    value={createm.title}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, title: e.target.value }) }} />
                <input
                    id="statut"
                    name="statut"
                    value={createm.status}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, statut: e.target.value }) }} />
                <input
                    id="address"
                    name="address"
                    value={createm.address}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, address: e.target.value }) }} />
                <input
                    id="mobilite"
                    name="mobilite"
                    value={createm.mobilite}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, mobilite: e.target.value }) }} />
                    <input
                    id="disponibilite"
                    name="disponibilite"
                    value={createm.disponibilite}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, disponibilite: e.target.value }) }} />
                    <input
                    id="pref_lieu_de_travail"
                    name="pref_lieu_de_travail"
                    value={createm.pref_lieu_de_travail}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, pref_lieu_de_travail: e.target.value }) }} />
                    <input
                    id="fourchette_tarifaire"
                    name="fourchette_tarifaire"
                    value={createm.fourchette_tarifaire}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, fourchette_tarifaire: e.target.value }) }} />
                    <input
                    id="excel"
                    name="excel"
                    value={createm.excel}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, excel: e.target.value }) }} />
                    <input
                    id="word"
                    name="word"
                    value={createm.word}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, word: e.target.value }) }} />
                    <input
                    id="powerpoint"
                    name="powerpoint"
                    value={createm.powerpoint}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, powerpoint: e.target.value }) }} />
                    <input
                    id="microsoft"
                    name="microsoft"
                    value={createm.microsoft}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, microsoft: e.target.value }) }} />
                    <input
                    id="crm_hubspot"
                    name="crm_hubspot"
                    value={createm.crm_hubspot}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, crm_hubspot: e.target.value }) }} />
                    <input
                    id="crm_salesforce"
                    name="crm_salesforce"
                    value={createm.crm_salesforce}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, crm_salesforce: e.target.value }) }} />
                    <input
                    id="crm_pipedrive"
                    name="crm_pipedrive"
                    value={createm.crm_pipedrive}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, crm_pipedrive: e.target.value }) }} />
                    <input
                    id="crm"
                    name="crm"
                    value={createm.crm}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, crm: e.target.value }) }} />
                    <input
                    id="suite_adobe"
                    name="suite_adobe"
                    value={createm.suite_adobe}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, suite_adobe: e.target.value }) }} />
                    <input
                    id="illustrator"
                    name="illustrator"
                    value={createm.illustrator}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, illustrator: e.target.value }) }} />
                    <input
                    id="in_design"
                    name="in_design"
                    value={createm.in_design}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, in_design: e.target.value }) }} />
                    <input
                    id="photoshop"
                    name="photoshop"
                    value={createm.photoshop}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, photoshop: e.target.value }) }} />
                    <input
                    id="marketing_fb"
                    name="marketing_fb"
                    value={createm.marketing_fb}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, marketing_fb: e.target.value }) }} />
                    <input
                    id="google_adwards"
                    name="google_adwards"
                    value={createm.google_adwards}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, google_adwards: e.target.value }) }} />
                    <input
                    id="insta"
                    name="insta"
                    value={createm.insta}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, insta: e.target.value }) }} />
                    <input
                    id="reseaux_sociaux"
                    name="reseaux_sociaux"
                    value={createm.reseaux_sociaux}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, reseaux_sociaux: e.target.value }) }} />
                    <input
                    id="keynote"
                    name="keynote"
                    value={createm.keynote}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, keynote: e.target.value }) }} />
                    <input
                    id="pages"
                    name="pages"
                    value={createm.pages}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, pages: e.target.value }) }} />
                    <input
                    id="gsuite_google"
                    name="gsuite_google"
                    value={createm.gsuite_google}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, gsuite_google: e.target.value }) }} />
                    <input
                    id="numbers"
                    name="numbers"
                    value={createm.numbers}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, numbers: e.target.value }) }} />
                    <input
                    id="erp_sap"
                    name="erp_sap"
                    value={createm.erp_sap}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, erp_sap: e.target.value }) }} />
                    <input
                    id="ciel_gestion"
                    name="ciel_gestion"
                    value={createm.ciel_gestion}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, ciel_gestion: e.target.value }) }} />
                    <input
                    id="cegid"
                    name="cegid"
                    value={createm.cegid}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, cegid: e.target.value }) }} />
                    <input
                    id="sage_gestion_commercial"
                    name="sage_gestion_commercial"
                    value={createm.sage_gestion_commercial}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, sage_gestion_commercial: e.target.value }) }} />
                    <input
                    id="sage_comptabilite"
                    name="sage_comptabilite"
                    value={createm.sage_comptabilite}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, sage_comptabilite: e.target.value }) }} />
                    <input
                    id="quadra"
                    name="quadra"
                    value={createm.quadra}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, quadra: e.target.value }) }} />
                    <input
                    id="reso_pb"
                    name="reso_pb"
                    value={createm.reso_pb}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, reso_pb: e.target.value }) }} />
                    <input
                    id="empathie"
                    name="empathie"
                    value={createm.empathie}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, empathie: e.target.value }) }} />
                    <input
                    id="intelligence_emo"
                    name="intelligence_emo"
                    value={createm.intelligence_emo}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, intelligence_emo: e.target.value }) }} />
                    <input
                    id="communication"
                    name="communication"
                    value={createm.communication}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, communication: e.target.value }) }} />
                    <input
                    id="gestion_temps"
                    name="gestion_temps"
                    value={createm.gestion_temps}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, gestion_temps: e.target.value }) }} />
                    <input
                    id="creativite"
                    name="creativite"
                    value={createm.creativite}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, creativite: e.target.value }) }} />
                    <input
                    id="esprit_entre"
                    name="esprit_entre"
                    value={createm.esprit_entre}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, esprit_entre: e.target.value }) }} />
                    <input
                    id="audace"
                    name="audace"
                    value={createm.audace}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, audace: e.target.value }) }} />
                    <input
                    id="vision_visu"
                    name="vision_visu"
                    value={createm.vision_visu}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, vision_visu: e.target.value }) }} />
                    <input
                    id="motivation"
                    name="motivation"
                    value={createm.motivationw}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, motivation: e.target.value }) }} />
                    <input
                    id="presence"
                    name="presence"
                    value={createm.presence}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, presence: e.target.value }) }} />
                    <input
                    id="sens_collectif"
                    name="sens_collectif"
                    value={createm.sens_collectif}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, sens_collectif: e.target.value }) }} />
                    <input
                    id="curiosite"
                    name="curiosite"
                    value={createm.curiosite}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, curiosite: e.target.value }) }} />
                    <input
                    id="sens_effort"
                    name="sens_effort"
                    value={createm.sens_effort}
                    required type="number"
                    onChange={(e) => { setCreatem({ ...createm, sens_effort: e.target.value }) }} /><input
                    id="sport"
                    name="sport"
                    value={createm.sport}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, sport: e.target.value }) }} />
                    <input
                    id="passion"
                    name="passion"
                    value={createm.passion}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, passion: e.target.value }) }} />
                    <input
                    id="engagement_asso"
                    name="engagement_asso"
                    value={createm.engagement_asso}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, engagement_asso: e.target.value }) }} />
                    <input
                    id="autres_softskill"
                    name="autres_softskill"
                    value={createm.autres_softskill}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, autres_softskill: e.target.value }) }} />
                    <input
                    id="gestion_admin_compta"
                    name="gestion_admin_compta"
                    value={createm.gestion_admin_compta}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_admin_compta: e.target.value }) }} />
                    <input
                    id="gestion_commerciale"
                    name="gestion_commerciale"
                    value={createm.gestion_commerciale}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_commerciale: e.target.value }) }} />
                    <input
                    id="gestion_op"
                    name="gestion_op"
                    value={createm.gestion_op}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_op: e.target.value }) }} />
                    <input
                    id="marketing_com_digit"
                    name="marketing_com_digit"
                    value={createm.marketing_com_digit}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, marketing_com_digit: e.target.value }) }} />
                    <input
                    id="gestion_fi_controle_gestion"
                    name="gestion_fi_controle_gestion"
                    value={createm.gestion_fi_controle_gestion}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_fi_controle_gestion: e.target.value }) }} />
                    <input
                    id="dsi"
                    name="dsi"
                    value={createm.dsi}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, dsi: e.target.value }) }} />
                    <input
                    id="gestion_rh_juridique"
                    name="gestion_rh_juridique"
                    value={createm.gestion_rh_juridique}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_rh_juridique: e.target.value }) }} />
                    <input
                    id="gestion_rel_client"
                    name="gestion_rel_client"
                    value={createm.gestion_rel_client}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, gestion_rel_client: e.target.value }) }} />
                    <input
                    id="francais"
                    name="francais"
                    value={createm.francais}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, francais: e.target.value }) }} />
                    <input
                    id="anglais"
                    name="anglais"
                    value={createm.anglais}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, anglais: e.target.value }) }} />
                    <input
                    id="italien"
                    name="italien"
                    value={createm.italien}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, italien: e.target.value }) }} />
                    <input
                    id="chinois"
                    name="chinois"
                    value={createm.chinois}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, chinois: e.target.value }) }} />
                    <input
                    id="russe"
                    name="russe"
                    value={createm.russe}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, russe: e.target.value }) }} />
                    <input
                    id="arabe"
                    name="arabe"
                    value={createm.arabe}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, arabe: e.target.value }) }} />
                    <input
                    id="allemand"
                    name="allemand"
                    value={createm.allemand}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, allemand: e.target.value }) }} />
                    <input
                    id="autres_langue"
                    name="autres_langue"
                    value={createm.autres_langue}
                    required type="text"
                    onChange={(e) => { setCreatem({ ...createm, autres_langue: e.target.value }) }} />                
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default Mission;
