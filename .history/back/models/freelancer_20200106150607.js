'use strict';
module.exports = (sequelize, DataTypes) => {
  const freelancer = sequelize.define('freelancer', {
    img: DataTypes.STRING,
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
    password: DataTypes.STRING,
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
    administrative_file_management: DataTypes.BOOLEAN,
    management_assistantship: DataTypes.BOOLEAN,
    secretariat_and_maintenance_agenda: DataTypes.BOOLEAN,
    filing_documents: DataTypes.BOOLEAN,
    commercial_strategy_and_sales_pitch: DataTypes.BOOLEAN,


    francais: DataTypes.INTEGER,
    anglais: DataTypes.INTEGER,
    italien: DataTypes.INTEGER,
    chinois: DataTypes.INTEGER,
    russe: DataTypes.INTEGER,
    arabe: DataTypes.INTEGER,
    allemand: DataTypes.INTEGER,
    autres_langue: DataTypes.STRING
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