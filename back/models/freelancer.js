'use strict';
module.exports = (sequelize, DataTypes) => {
  const freelancer = sequelize.define('freelancer', {
<<<<<<< HEAD
    img: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
      validate: {
        max: 2, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 40],
      }
    },
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 40],
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 40],
      }
    },
    note: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500],
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      }
    },
    mobilite: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          ['Oui', 'Non']
        ], // check the value is one of these
      }
    },
    km_max: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          ['10 km', '20 km', '30 km', '40 km', '50 km']
        ], // check the value is one of these
      }
    },
    tel: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 30],
      }
    },
    cp: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 10],
      }
    },
    pref_lieu_de_travail: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          ['Présence en entreprise', 'Travail à distance', 'Peu importe']
        ], // check the value is one of these
      }
    },
    disponibilite: {
      type: DataTypes.INTEGER,
      validate: {
        max: 31,
        min: 0,
        isInt: true, // checks for valid integers
      }
    },
    tjm_min: {
      type: DataTypes.INTEGER
    },
    tjm_max: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 40],
        isEmail: true,

      }
    },
    excel:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    powerpoint:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    word:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    microsoft_365:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_hubspot:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_salesforce:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_pipedrive:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    suite_adobe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    illustrator:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    in_design:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    photoshop:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    marketing_fb:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    google_adwards:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    insta:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    reseaux_sociaux:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    keynote:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    pages:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gsuite_google:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    numbers:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    erp_sap:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    ciel_gestion:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    cegid:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sage_gestion_commercial:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sage_comptabilite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    quadra:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    reso_pb:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    confiance:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    empathie:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    intelligence_emo:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    communication:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gestion_temps:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gestion_stress:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    creativite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    esprit_entre:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    audace:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    vision_visu:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    motivation:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    presence:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sens_collectif:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    curiosite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sens_effort:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sport: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    passion: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    engagement_asso: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    autres_softskill: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },

    assistance_suivi_comptable:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    relation_accountant:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    customer_recovery:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    payroll_preparation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    assembly_approval_file:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    referencing_training_organization: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    use_business_software: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    internal_procedure:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    database:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    gestion_achat:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    gestion_achat2: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    administrative_file_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_assistantship:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    secretariat_and_maintenance_agenda:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    filing_documents:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    commercial_strategy_and_sales_pitch:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_of_commercial_activity:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    prospecting_outbound_sales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    response_to_pulic_and_private_tenders:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    sales_administration:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    stock_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    business_data_crm:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    order_data_entry:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    quote_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    billing:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    claims_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    marketing_strategy_and_operational_monitoring:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    marketing_study:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    implementation_of_inbound_marketing_strategy:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outbound_marketing:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    communication_strategy:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_project_manager:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    creation_and_graphics:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    ux_design:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    ui_design_computer_graphics:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    redaction_design:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    seo_optimization:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    website_creation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    community_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    press_relation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    event:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    partnership_distribution_network_and_business_contribution:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    translation_work:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    administrative_and_financial_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    financing_grant_application:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_control:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    dashboard_and_financial_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    business_pland_and_provisional_budget:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    transfer_aid_and_buyout_of_business:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_information_system_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    schema_directeur_si:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    functional_architecture:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    infra_reseau:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_hr_department:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    plannings_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    payroll_tracking:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    establishment_of_contracts_end_of_contracts:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    suivi_mutuelle_medecine_du_travail:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    conflict_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    assembly_and_monitoring_litigation_files:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    harmonization_of_contracts:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    RGPD_compliation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    harmonization_salary_scales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    provisional_management_of_jobs_and_skill:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    recruitment_and_integration:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    suivi_des_grands_comptes:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    additional_sales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    measure_of_customers_satisfaction:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    after_sales_service:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },

    francais:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    anglais:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    italien:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    chinois:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    russe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    arabe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    allemand:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    autres_langue: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 50],
      }
    },
=======
    img: DataTypes.STRING,
    status: {
      defaultValue:0,
      type:DataTypes.INTEGER},
    title: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    mobilite: DataTypes.STRING,
    km_max:DataTypes.STRING,
    tel:DataTypes.STRING,
    cp:DataTypes.STRING,
    pref_lieu_de_travail: DataTypes.STRING,
    disponibilite: DataTypes.INTEGER,
    tjm_min:DataTypes.INTEGER,
    tjm_max: DataTypes.INTEGER,
    email: DataTypes.STRING,
    excel: DataTypes.INTEGER,
    powerpoint: DataTypes.INTEGER,
    word: DataTypes.INTEGER,
    microsoft_365: DataTypes.INTEGER,
    crm_hubspot: DataTypes.INTEGER,
    crm_salesforce: DataTypes.INTEGER,
    crm_pipedrive: DataTypes.INTEGER,
    crm: DataTypes.INTEGER,
    suite_adobe: DataTypes.INTEGER,
    illustrator: DataTypes.INTEGER,
    in_design: DataTypes.INTEGER,
    photoshop: DataTypes.INTEGER,
    marketing_fb: DataTypes.INTEGER,
    google_adwards: DataTypes.INTEGER,
    insta: DataTypes.INTEGER,
    reseaux_sociaux: DataTypes.INTEGER,
    keynote: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    gsuite_google: DataTypes.INTEGER,
    numbers: DataTypes.INTEGER,
    erp_sap: DataTypes.INTEGER,
    ciel_gestion: DataTypes.INTEGER,
    cegid: DataTypes.INTEGER,
    sage_gestion_commercial: DataTypes.INTEGER,
    sage_comptabilite: DataTypes.INTEGER,
    quadra: DataTypes.INTEGER,
    reso_pb: DataTypes.INTEGER,
    confiance: DataTypes.INTEGER,
    empathie: DataTypes.INTEGER,
    intelligence_emo: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    gestion_temps: DataTypes.INTEGER,
    gestion_stress: DataTypes.INTEGER,
    creativite: DataTypes.INTEGER,
    esprit_entre: DataTypes.INTEGER,
    audace: DataTypes.INTEGER,
    vision_visu: DataTypes.INTEGER,
    motivation: DataTypes.INTEGER,
    presence: DataTypes.INTEGER,
    sens_collectif: DataTypes.INTEGER,
    curiosite: DataTypes.INTEGER,
    sens_effort: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    passion: DataTypes.STRING,
    engagement_asso: DataTypes.STRING,
    autres_softskill: DataTypes.STRING,

    assistance_suivi_comptable: DataTypes.BOOLEAN,
    relation_accountant: DataTypes.BOOLEAN,
    customer_recovery: DataTypes.BOOLEAN,
    payroll_preparation: DataTypes.BOOLEAN,
    assembly_approval_file: DataTypes.BOOLEAN,
    referencing_training_organization:DataTypes.BOOLEAN,
    use_business_software:DataTypes.BOOLEAN,
    internal_procedure: DataTypes.BOOLEAN,
    database: DataTypes.BOOLEAN,
    gestion_achat: DataTypes.BOOLEAN,
    gestion_achat2:DataTypes.BOOLEAN,
    administrative_file_management: DataTypes.BOOLEAN,
    management_assistantship: DataTypes.BOOLEAN,
    secretariat_and_maintenance_agenda: DataTypes.BOOLEAN,
    filing_documents: DataTypes.BOOLEAN,
    commercial_strategy_and_sales_pitch: DataTypes.BOOLEAN,
    management_of_commercial_activity: DataTypes.BOOLEAN,
    prospecting_outbound_sales: DataTypes.BOOLEAN,
    response_to_pulic_and_private_tenders: DataTypes.BOOLEAN,
    sales_administration: DataTypes.BOOLEAN,
    stock_management: DataTypes.BOOLEAN,
    business_data_crm: DataTypes.BOOLEAN,
    order_data_entry: DataTypes.BOOLEAN,
    quote_management: DataTypes.BOOLEAN,
    billing: DataTypes.BOOLEAN,
    claims_management: DataTypes.BOOLEAN,
    marketing_strategy_and_operational_monitoring: DataTypes.BOOLEAN,
    marketing_study: DataTypes.BOOLEAN,
    implementation_of_inbound_marketing_strategy: DataTypes.BOOLEAN,
    outbound_marketing: DataTypes.BOOLEAN,
    communication_strategy: DataTypes.BOOLEAN,
    outsourced_project_manager: DataTypes.BOOLEAN,
    creation_and_graphics: DataTypes.BOOLEAN,
    ux_design: DataTypes.BOOLEAN,
    ui_design_computer_graphics: DataTypes.BOOLEAN,
    redaction_design: DataTypes.BOOLEAN,
    seo_optimization: DataTypes.BOOLEAN,
    website_creation: DataTypes.BOOLEAN,
    community_management: DataTypes.BOOLEAN,
    press_relation: DataTypes.BOOLEAN,
    event: DataTypes.BOOLEAN,
    partnership_distribution_network_and_business_contribution: DataTypes.BOOLEAN,
    translation_work: DataTypes.BOOLEAN,
    administrative_and_financial_management: DataTypes.BOOLEAN,
    financing_grant_application: DataTypes.BOOLEAN,
    management_control: DataTypes.BOOLEAN,
    dashboard_and_financial_management: DataTypes.BOOLEAN,
    business_pland_and_provisional_budget: DataTypes.BOOLEAN,
    transfer_aid_and_buyout_of_business: DataTypes.BOOLEAN,
    outsourced_information_system_management: DataTypes.BOOLEAN,
    schema_directeur_si: DataTypes.BOOLEAN,
    functional_architecture: DataTypes.BOOLEAN,
    infra_reseau: DataTypes.BOOLEAN,
    outsourced_hr_department: DataTypes.BOOLEAN,
    plannings_management: DataTypes.BOOLEAN,
    payroll_tracking: DataTypes.BOOLEAN,
    establishment_of_contracts_end_of_contracts: DataTypes.BOOLEAN,
    suivi_mutuelle_medecine_du_travail: DataTypes.BOOLEAN,
    conflict_management: DataTypes.BOOLEAN,
    assembly_and_monitoring_litigation_files: DataTypes.BOOLEAN,
    harmonization_of_contracts: DataTypes.BOOLEAN,
    RGPD_compliation: DataTypes.BOOLEAN,
    harmonization_salary_scales: DataTypes.BOOLEAN,
    provisional_management_of_jobs_and_skill: DataTypes.BOOLEAN,
    recruitment_and_integration: DataTypes.BOOLEAN,
    suivi_des_grands_comptes: DataTypes.BOOLEAN,
    additional_sales: DataTypes.BOOLEAN,
    measure_of_customers_satisfaction: DataTypes.BOOLEAN,
    after_sales_service: DataTypes.BOOLEAN,

    francais: DataTypes.INTEGER,
    anglais: DataTypes.INTEGER,
    italien: DataTypes.INTEGER,
    chinois: DataTypes.INTEGER,
    russe: DataTypes.INTEGER,
    arabe: DataTypes.INTEGER,
    allemand: DataTypes.INTEGER,
    autres_langue: DataTypes.STRING
>>>>>>> update_neoworker_stevie
  }, {});

  //table de jointure
  freelancer.associate = function(models) {
    freelancer.belongsToMany(models.users, {
      through: 'tj_users_f'
    })
    freelancer.belongsToMany(models.missions,{
      through: 'tj_missions_f'
    })
  };
  return freelancer;
};