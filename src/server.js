const fastify = require('fastify')({logger: true})
// const route =require('../routes')
const dbconnector = require('../db')
// fastify.register(dbconnector)
// fastify.register(route)
fastify.get('/', async (request, reply) => { 
   dbconnector.query('SELECT * FROM `loan` WHERE `interest` = 50',
   function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      
   })
   reply.send({ hello: 'world' }) 
}) 


async function start()  { 
   try{ 
      await fastify.listen(3000) 
   } catch(err) { 
      fastify.log.error(err) 
      process.exit(1) 
   } 
} 
start()
