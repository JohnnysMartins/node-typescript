import GenericException from "./GenericException";

export default class MongoNotConnectedException extends GenericException {
  constructor() {
    super('MongoNotConnectedException', 'Not connected to a mongo dabatase');

    Object.setPrototypeOf(this, MongoNotConnectedException.prototype);
  }
}