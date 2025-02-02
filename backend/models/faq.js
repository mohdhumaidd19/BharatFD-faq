import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class FAQ extends Model {
    getTranslatedQuestion(lang) {
      return this[`question_${lang}`] || this.question;
    }

  }

  FAQ.init(
    {
      question: DataTypes.STRING,
      question_hi: DataTypes.STRING,
      question_bn: DataTypes.STRING,
      question_ta: DataTypes.STRING,
      question_mr: DataTypes.STRING,
      question_gu: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FAQ',
    }
  );

  return FAQ;
};