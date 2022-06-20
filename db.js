// const fastifyPlugin = require('fastify-plugin') 
const mysql = require('mysql2') 
require('dotenv').config() 
const client = mysql.createConnection({ 
   user: 'root', 
   password: null,
   host: 'localhost', 
   port: 3306,
   database: 'test'
}) 

client.connect()
      console.log("db connected succesfully!") 
// async function dbconnector(fastify, options) { 
//    try { 
//       await client.connect()
//       fastify.decorate('db', {client}) 
//    } catch(err) { 
//       console.error(err) 
//    } 
// } 
module.exports=client



