'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('freelancers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img:{
        type:Sequelize.BOOLEAN
      },
      title:{
        type:Sequelize.STRING
      },
      firstname:{
        type:Sequelize.STRING
      },
      lastname:{
        type:Sequelize.STRING
      },
      address:{
        type:Sequelize.STRING
      },
      mobilite: {
        type: Sequelize.BOOLEAN
      },
      km_max:{
        type:Sequelize.INTEGER
      },
      tel:{
        type:Sequelize.STRING
      },
      cp:{
        type:Sequelize.STRING
      },
      pref_lieu_de_travail: {
        type: Sequelize.INTEGER
      },
      disponibilite: {
        type: Sequelize.INTEGER
      },
      tjm_min:{
        type: Sequelize.INTEGER
      },
      tjm_max:{
        type: Sequelize.INTEGER
      },
      password:{
          type: Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
       excel: {
        type: Sequelize.INTEGER
      },
      powerpoint: {
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.INTEGER
      },
      microsoft_365: {
        type: Sequelize.INTEGER
      },
      crm_hubspot: {
        type: Sequelize.INTEGER
      },
      crm_salesforce: {
        type: Sequelize.INTEGER
      },
      crm_pipedrive: {
        type: Sequelize.INTEGER
      },
      crm: {
        type: Sequelize.INTEGER
      },
      suite_adobe: {
        type: Sequelize.INTEGER
      },
      illustrator: {
        type: Sequelize.INTEGER
      },
      in_design: {
        type: Sequelize.INTEGER
      },
      photoshop: {
        type: Sequelize.INTEGER
      },
      marketing_fb: {
        type: Sequelize.INTEGER
      },
      google_adwards: {
        type: Sequelize.INTEGER
      },
      insta: {
        type: Sequelize.INTEGER
      },
      reseaux_sociaux: {
        type: Sequelize.INTEGER
      },
      keynote: {
        type: Sequelize.INTEGER
      },
      pages: {
        type: Sequelize.INTEGER
      },
      gsuite_google: {
        type: Sequelize.INTEGER
      },
      numbers: {
        type: Sequelize.INTEGER
      },
      erp_sap: {
        type: Sequelize.INTEGER
      },
      ciel_gestion: {
        type: Sequelize.INTEGER
      },
      cegid: {
        type: Sequelize.INTEGER
      },
      sage_gestion_commercial: {
        type: Sequelize.INTEGER
      },
      sage_comptabilite: {
        type: Sequelize.INTEGER
      },
      quadra: {
        type: Sequelize.INTEGER
      },
      reso_pb: {
        type: Sequelize.INTEGER
      },
      confiance: {
        type: Sequelize.INTEGER
      },
      empathie: {
        type: Sequelize.INTEGER
      },
      intelligence_emo: {
        type: Sequelize.INTEGER
      },
      communication: {
        type: Sequelize.INTEGER
      },
      gestion_temps: {
        type: Sequelize.INTEGER
      },
      gestion_stress: {
        type: Sequelize.INTEGER
      },
      creativite: {
        type: Sequelize.INTEGER
      },
      esprit_entre: {
        type: Sequelize.INTEGER
      },
      audace: {
        type: Sequelize.INTEGER
      },
      vision_visu: {
        type: Sequelize.INTEGER
      },
      motivation: {
        type: Sequelize.INTEGER
      },
      presence: {
        type: Sequelize.INTEGER
      },
      sens_collectif: {
        type: Sequelize.INTEGER
      },
      curiosite: {
        type: Sequelize.INTEGER
      },
      sens_effort: {
        type: Sequelize.INTEGER
      },
      sport: {
        type: Sequelize.STRING
      },
      passion: {
        type: Sequelize.STRING
      },
      engagement_asso: {
        type: Sequelize.STRING
      },
      autres_softskill: {
        type: Sequelize.STRING
      },
      gestion_admin_compta: {
        type: Sequelize.INTEGER
      },
      gestion_op: {
        type: Sequelize.INTEGER
      },
      gestion_commerciale: {
        type: Sequelize.INTEGER
      },
      marketing_com_digit: {
        type: Sequelize.INTEGER
      },
      gestion_fi_controle_gestion: {
        type: Sequelize.INTEGER
      },
      dsi: {
        type: Sequelize.INTEGER
      },
      gestion_rh_juridique: {
        type: Sequelize.INTEGER
      },
      gestion_rel_client: {
        type: Sequelize.INTEGER
      },
      francais: {
        type: Sequelize.INTEGER
      },
      anglais: {
        type: Sequelize.INTEGER
      },
      italien: {
        type: Sequelize.INTEGER
      },
      chinois: {
        type: Sequelize.INTEGER
      },
      russe: {
        type: Sequelize.INTEGER
      },
      arabe: {
        type: Sequelize.INTEGER
      },
      allemand: {
        type: Sequelize.INTEGER
      },
      autres_langue: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('freelancers');
  }
};