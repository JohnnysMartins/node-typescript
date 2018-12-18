import { connect, connection, Connection as MongoConnection } from 'mongoose';
import MongoNotConnectedException from '../exception/MongoNotConnectedException';

export default class Connection {

  private db: MongoConnection;

  constructor() {}

  connect(): Promise<this> {
    return new Promise(async (resolve, reject) => {
      try {
        await connect(`mongodb://johnnysmartins:teste1234@ds127034.mlab.com:27034/example_node_ts`, {
          poolSize: 10,
          bufferMaxEntries: 0,
          bufferCommands: false
        });
        this.db = connection;
        if (this.db.readyState !== 1) {
          throw new MongoNotConnectedException;
        }
        resolve(this);
      }
      catch (err) {
        reject(err);
      }
    })
  }

  disconnect(): Promise<any> {
    return this.db.close();
  }
}