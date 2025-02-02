import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import  db  from './models/index.js';
const {sequelize}=db;
AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

export default router;