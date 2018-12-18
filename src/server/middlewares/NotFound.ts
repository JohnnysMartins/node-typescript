import { Request, Response } from "express";
import ResourceNotFountException from "../../exception/ResourceNotFountException";

export default (req: Request, res: Response, next) => {
  next(new ResourceNotFountException(req.originalUrl));
}