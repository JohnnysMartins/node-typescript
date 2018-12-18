import { Router } from 'express'
import UserRouter from './UserRouter';

class Index {
  public router: Router;

  constructor () {
    this.router = Router()
    this.init()
  }

  private init(): this {
    this.router.use('/users', UserRouter)
    return this
  }
}

export default new Index().router