import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class FAQ extends Model {
    /**
     * Helper method to get the question in a specific language.
     */
    getTranslatedQuestion(lang) {
      return this[`question_${lang}`] || this.question; // Fallback to English
    }

    static associate(models) {
      // Define associations if needed in the future
    }
  }

  FAQ.init(
    {
      question: DataTypes.STRING,
      question_hi: DataTypes.STRING,
      question_bn: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FAQ',
    }
  );

  return FAQ;
};