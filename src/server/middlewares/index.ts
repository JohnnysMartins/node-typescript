import * as express from 'express'
import * as morgan from 'morgan';
import app from '../app'
import router from '../../router'

import exception from './exception';

export default {
  init() {
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use('/api/v1', router)
  },
  initException() {
    app.use(exception)
  }
}
