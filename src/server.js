
const cors = require("cors");

app.use(cors({
  origin: '*',
  allowedHeaders: 'X-Requested-With, Content-Type, auth-token',
}));
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
  
  app.use('/v1', APIs_V1)
  app.get('/', async (req, res) => {
    console.log(env.AUTHOR);
    // Test Absolute import mapOrder
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}/`)
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(` ${env.PORT}/`)
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