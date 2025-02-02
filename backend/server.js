import express from 'express';
import cors from 'cors';
import adminRouter from './admin.js'; 
import bodyParser from 'body-parser';
import faqRoutes from './routes/faqRoutes.js'; 
import db from './models/index.js';
const {sequelize} = db;
const app = express();

app.use('/admin', adminRouter);
app.use(cors());
app.use(bodyParser.json());
app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});