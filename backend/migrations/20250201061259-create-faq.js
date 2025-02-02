const { DataTypes } = require("sequelize");
const db = require("../config/database");

const FAQ = db.define("FAQ", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_hi: {
    type: DataTypes.STRING,
  },
  question_bn: {
    type: DataTypes.STRING,
  },
  question_ta: {  
    type: DataTypes.STRING,
  },
  question_mr: {  
    type: DataTypes.STRING,
  },
  question_gu: {  
    type: DataTypes.STRING,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = FAQ;
