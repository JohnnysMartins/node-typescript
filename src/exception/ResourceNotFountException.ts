import GenericException from "./GenericException";
import { Request } from "express";

export default class ResourceNotFountException extends GenericException {
  constructor(uri: string) {
    super('ResourceNotFountException', `${uri} doesn't exist on this server`);

    Object.setPrototypeOf(this, ResourceNotFountException.prototype);
  }
}
