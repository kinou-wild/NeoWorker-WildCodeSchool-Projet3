import React, {useState} from 'react'
import { Dropdown } from "semantic-ui-react";

const options = [
    {
      key: "gestion_admin_compta",
      text: "Gestion administrative et comptabilitée",
      value: "idFree.gestion_admin_compta"
    },
    {
      key: "gestion_op",
      text: "Gestion Opérationnel",
      value: "idFree.gestion_op"
    },
    {
      key: "gestion_commerciale",
      text: "Gestion Commerciale ",
      value: "idFree.gestion_commerciale"
    },
    {
      key: "marketing_com_digit",
      text: "Marketing Digital",
      value: "idFree.marketing_com_digit"
    },
    {
      key: "gestion_fi_controle_gestion",
      text: "Gestion Financière et controle de gestion",
      value: "idFree.gestion_fi_controle_gestion"
    },
    {
      key: "dsi",
      text: "Directeur des systèmes d information",
      value: "idFree.dsi"
    },
    {
      key: "gestion_rh_juridique",
      text: "Gestion ressources humaine et juridique",
      value: "idFree.gestion_rh_juridique"
    },
    {
      key: "gestion_rel_cpent",
      text: "Gestion relation client",
      value: "idFree.gestion_rel_cpent"
    }
  ];

const Slide5 = () => {
        //hooks de la data freelancer pour get un id
        const [idFree, setIdFree] = useState([])

        //hooks de la data user pour le get de l'id
        const [idUser, setIdUser] = useState([])

return(
<Dropdown placeholder="Famille de prestations" fluid multiple selection options={options} />
)
}

export default Slide5;