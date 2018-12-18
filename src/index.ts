// require('dotenv').config()
import app from './server/app'
import Middleware from './server/middlewares';
import Connection from './config/Connection';

const port = process.env.PORT || 3000

const mongoConnection = new Connection();

Middleware.init()

Middleware.initException()

app.listen(port, async (err) => {
  await mongoConnection.connect()
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
