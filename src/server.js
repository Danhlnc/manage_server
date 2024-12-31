/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
const cors = require("cors");
import express from 'express'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'
import { mapOrder } from '~/utils/sorts.js'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
const START_SERVER = () => {
  const app = express()
  //router
  app.use(express.json())
  
  app.use(cors({
    origin: '*',
    allowedHeaders: 'X-Requested-With, Content-Type, auth-token',
}));
  app.use('/v1', APIs_V1)
  app.get('/', async (req, res) => {
    console.log(env.AUTHOR);
    // Test Absolute import mapOrder
    console.log(mapOrder(
      [{ id: 'id-1', name: 'One' },
      { id: 'id-2', name: 'Two' },
      { id: 'id-3', name: 'Three' },
      { id: 'id-4', name: 'Four' },
      { id: 'id-5', name: 'Five' }],
      ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
      'id'
    ))
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(process.env.PORT, () => {
    console.log(`Hello Trung Quan Dev, I am running at ${process.env.PORT}/`)
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello Trung Quan Dev, I am running at ${env.PORT}/`)
  })
}

CONNECT_DB()
  .then(() => {
    console.log('Connected to MongoDB Cloud Atlas!');
  }).then(() => {
    START_SERVER()
  }

  ).catch(
    error => {
      console.error(error);
      exit();
    }


  )
exitHook(() => {
  console.log('Exit');
})