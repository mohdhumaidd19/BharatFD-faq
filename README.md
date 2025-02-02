# **FAQ MANAGEMENT**
Lets first start with the setup of Backend :

# **Environment Variables**:

The Backend configuration relies on the following environment variables,which should be defined in the .env file:

.env
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=humaidbytes
DB_NAME=faq_management
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

```
**Setup**
1. Clone the Repository:
   ```
   git clone https://github.com/mohdhumaidd19/BharatFD-faq.git
   cd backend
   
   ```
2. Install Dependencies:
  ```
npm install

  ```
3. Set up environment variables:
   Create a .env file in the root of the project and add the environment variables listed above.

4. Start the MySQL database:
   ```
   CREATE DATABASE faq_management;

   ```
   
5. Set up Redis:
    Ensure that Redis is running on the specified host and port.
   ```
   redis-server
   ```
6. Migrate the database :
   Run the command to manage the database while using Sequelize ORM
   ```
   npx sequelize-cli db:migrate
   ```
7. Start the server:
   ```
   npm start
   ```
   **End Points**
  **GET /faqs?lang={id}**: Fetch all FAQs in the selected language.
  **POST /faqs**: Add a new FAQ.

   **Technology Used**
   Node.js
   Express.js
   MySQL
   Redis
   Sequelize

   
**FRONTEND**
Go back to the parent folder and write the below command
```
cd frontend
```

Install Dependencies:

```
npm install
```

Start the Server:
```
npm start

```
