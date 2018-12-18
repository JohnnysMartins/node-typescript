import GenericException from "./GenericException";
import { Request } from "express";

export default class UserNotExistException extends GenericException {
  constructor(id: string) {
    super('UserNotExistException', `id: ${id} doesn't exist on this server`);

    Object.setPrototypeOf(this, UserNotExistException.prototype);
  }
}
