import { Sequelize, DataTypes } from 'sequelize';
import initFAQ from '../models/faq';

const sequelize = new Sequelize('sqlite::memory:');
const FAQ = initFAQ(sequelize, DataTypes);

describe('FAQ Model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('should get the translated question in multiple languages', async () => {
    const faq = await FAQ.create({
      question: 'What is your name?',
      question_hi: 'आपका नाम क्या है?',
      question_bn: 'তোমার নাম কি?',
      question_ta: 'உன் பெயர் என்ன?',
      question_mr: 'तुझं नाव काय आहे?',
      question_gu: 'તમારું નામ શું છે?',
      answer: 'My name is Mohd Humaid.',
    });

    expect(faq.getTranslatedQuestion('hi')).toEqual('आपका नाम क्या है?');
    expect(faq.getTranslatedQuestion('bn')).toEqual('তোমার নাম কি?');
    expect(faq.getTranslatedQuestion('ta')).toEqual('உன் பெயர் என்ன?');
    expect(faq.getTranslatedQuestion('mr')).toEqual('तुझं नाव काय आहे?');
    expect(faq.getTranslatedQuestion('gu')).toEqual('તમારું નામ શું છે?');
    expect(faq.getTranslatedQuestion('en')).toEqual('What is your name?');
  });

  it('should fallback to the default question if translation is not available', async () => {
    const faq = await FAQ.create({
      question: 'What is your name?',
      answer: 'My name is Mohd Humaid.',
    });

    expect(faq.getTranslatedQuestion('hi')).toEqual('What is your name?');
    expect(faq.getTranslatedQuestion('ta')).toEqual('What is your name?');
    expect(faq.getTranslatedQuestion('mr')).toEqual('What is your name?');
    expect(faq.getTranslatedQuestion('gu')).toEqual('What is your name?');
  });
});
