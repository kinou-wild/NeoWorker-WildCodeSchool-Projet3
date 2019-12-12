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
        allowNull: false,
        type:Sequelize.STRING
      },
      firstname:{
        allowNull: false,
        type:Sequelize.STRING
      },
      lastname:{
        allowNull: false,
        type:Sequelize.STRING
      },
      address:{
        allowNull: false,
        type:Sequelize.STRING
      },
      mobilite: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pref_lieu_de_travail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      disponibilite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fourchette_tarifaire: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password:{
          allowNull: false,
          type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        type:Sequelize.STRING
      },
      excel: {
        type: Sequelize.STRING
      },
      powerpoint: {
        type: Sequelize.STRING
      },
      word: {
        type: Sequelize.STRING
      },
      microsoft_365: {
        type: Sequelize.STRING
      },
      crm_hubspot: {
        type: Sequelize.STRING
      },
      crm_salesforce: {
        type: Sequelize.STRING
      },
      crm_pipedrive: {
        type: Sequelize.STRING
      },
      crm: {
        type: Sequelize.STRING
      },
      suite_adobe: {
        type: Sequelize.STRING
      },
      illustrator: {
        type: Sequelize.STRING
      },
      in_design: {
        type: Sequelize.STRING
      },
      photoshop: {
        type: Sequelize.STRING
      },
      marketing_fb: {
        type: Sequelize.STRING
      },
      google_adwards: {
        type: Sequelize.STRING
      },
      insta: {
        type: Sequelize.STRING
      },
      reseaux_sociaux: {
        type: Sequelize.STRING
      },
      keynote: {
        type: Sequelize.STRING
      },
      pages: {
        type: Sequelize.STRING
      },
      gsuite_google: {
        type: Sequelize.STRING
      },
      numbers: {
        type: Sequelize.STRING
      },
      erp_sap: {
        type: Sequelize.STRING
      },
      ciel_gestion: {
        type: Sequelize.STRING
      },
      cegid: {
        type: Sequelize.STRING
      },
      sage_gestion_commercial: {
        type: Sequelize.STRING
      },
      sage_comptabilite: {
        type: Sequelize.STRING
      },
      quadra: {
        type: Sequelize.STRING
      },
      reso_pb: {
        type: Sequelize.STRING
      },
      confiance: {
        type: Sequelize.STRING
      },
      empathie: {
        type: Sequelize.STRING
      },
      intelligence_emo: {
        type: Sequelize.STRING
      },
      communication: {
        type: Sequelize.STRING
      },
      gestion_temps: {
        type: Sequelize.STRING
      },
      gestion_stress: {
        type: Sequelize.STRING
      },
      creativite: {
        type: Sequelize.STRING
      },
      esprit_entre: {
        type: Sequelize.STRING
      },
      audace: {
        type: Sequelize.STRING
      },
      vision_visu: {
        type: Sequelize.STRING
      },
      motivation: {
        type: Sequelize.STRING
      },
      presence: {
        type: Sequelize.STRING
      },
      sens_collectif: {
        type: Sequelize.STRING
      },
      curiosite: {
        type: Sequelize.STRING
      },
      sens_effort: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      gestion_op: {
        type: Sequelize.STRING
      },
      gestion_commerciale: {
        type: Sequelize.STRING
      },
      marketing_com_digit: {
        type: Sequelize.STRING
      },
      gestion_fi_controle_gestion: {
        type: Sequelize.STRING
      },
      dsi: {
        type: Sequelize.STRING
      },
      gestion_rh_juridique: {
        type: Sequelize.STRING
      },
      gestion_rel_client: {
        type: Sequelize.STRING
      },
      francais: {
        type: Sequelize.STRING
      },
      anglais: {
        type: Sequelize.STRING
      },
      italien: {
        type: Sequelize.STRING
      },
      chinois: {
        type: Sequelize.STRING
      },
      russe: {
        type: Sequelize.STRING
      },
      arabe: {
        type: Sequelize.STRING
      },
      allemand: {
        type: Sequelize.STRING
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